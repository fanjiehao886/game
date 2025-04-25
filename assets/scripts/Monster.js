cc.Class({
    extends: cc.Component,
 
    properties: {
        maxHealth: {
            default: 100,
            type: cc.Integer,
            tooltip: '怪物最大生命值'
        },
        collectAudio: {
            default: null,
            type: cc.AudioClip,
            tooltip: '收集星星的音效'
        },
        currentHealth: {
            default: 100,
            type: cc.Integer,
            tooltip: '怪物当前生命值'
        },
        healthBar: {
            default: null,
            type: cc.Node,
            tooltip: '血条节点'
        },
        hitAudio: {
            default: null,
            type: cc.AudioClip,
            tooltip: '受击音效'
        },
        deathAudio: {
            default: null,
            type: cc.AudioClip,
            tooltip: '死亡音效'
        },
        bombPrefab: {
            default: null,
            type: cc.Prefab,
            tooltip: '炸弹预制体'
        },
        starPrefab: {
            default: null,
            type: cc.Prefab,
            tooltip: '星星预制体'
        },
        detectionRadius: {
            default: 300,
            type: cc.Float,
            tooltip: '检测玩家的范围'
        },
        moveSpeed: {
            default: 50,
            type: cc.Float,
            tooltip: '移动速度'
        },
        shootInterval: {
            default: 2.0,
            type: cc.Float,
            tooltip: '发射间隔'
        }
    },
 
    onLoad() {
        this.currentHealth = this.maxHealth;
        this.lastShootTime = 0; // 确保初始化射击时间
        
        // 检查是否有炸弹预制体
        if (!this.bombPrefab) {
            cc.error('未设置炸弹预制体！');
        }
        
        // 确保有碰撞组件
        let collider = this.getComponent(cc.BoxCollider);
        if (!collider) {
            collider = this.addComponent(cc.BoxCollider);
            collider.size.width = this.node.width;
            collider.size.height = this.node.height;
        }
        // 设置碰撞组
        this.node.group = 'monster';
 
        // 获取血条中的 Bar 节点
        if (this.healthBar) {
            this.barNode = this.healthBar.getChildByName('Bar');
            if (!this.barNode) {
                cc.error('找不到 Bar 节点！');
                return;
            }
            // 保存初始宽度
            this.originalBarWidth = this.barNode.width;
            cc.log('血条初始宽度：', this.originalBarWidth);
        } else {
            cc.error('未设置血条节点！');
        }
 
        // 添加死亡标记
        this.isDying = false;
        
        // 添加刚体组件
        let rigidBody = this.getComponent(cc.RigidBody);
        if (!rigidBody) {
            rigidBody = this.addComponent(cc.RigidBody);
            rigidBody.type = cc.RigidBodyType.Dynamic;
            rigidBody.fixedRotation = true;
        }
    },
 
    createHealthBar() {
        // 创建血条节点
        let healthBarNode = new cc.Node('HealthBar');
        this.node.addChild(healthBarNode);
        healthBarNode.zIndex = 1;
        
        // 创建背景条
        let barBgNode = new cc.Node('BarBg');
        healthBarNode.addChild(barBgNode);
        let barBgSprite = barBgNode.addComponent(cc.Sprite);
        barBgSprite.color = cc.Color.RED;
        
        // 创建血量条
        let barNode = new cc.Node('Bar');
        healthBarNode.addChild(barNode);
        let barSprite = barNode.addComponent(cc.Sprite);
        barSprite.color = cc.Color.GREEN;
        
        // 设置血条尺寸和位置
        healthBarNode.width = 100;
        healthBarNode.height = 10;
        barBgNode.width = 100;
        barBgNode.height = 10;
        barNode.width = 100;
        barNode.height = 10;
        
        // 将血条放在怪物上方
        healthBarNode.setPosition(0, this.node.height / 2 + 10);
        
        // 保存引用
        this.healthBar = healthBarNode;
        this.healthBarBg = barBgNode;
    },
 
    start() {
        this.updateHealthBar();
    },
 
    takeDamage(damage) {
        // 如果已经在死亡过程中，不再处理伤害
        if (this.isDying) return;
        
        if (typeof damage !== 'number' || damage <= 0) return;
        
        // 使用 playEffect 播放音效
        if (this.hitAudio) {
            cc.audioEngine.playEffect(this.hitAudio, false, 0.3);
        }
        
        // 减少生命值
        this.currentHealth = Math.max(0, this.currentHealth - damage);
        
        // 更新血条显示
        if (this.barNode && this.originalBarWidth) {
            let healthPercentage = this.currentHealth / this.maxHealth;
            this.barNode.width = this.originalBarWidth * healthPercentage;
        }
        
        cc.log('怪物受到伤害:', damage, '当前生命值:', this.currentHealth);
        
        // 检查是否死亡
        if (this.currentHealth <= 0 && !this.isDying) {
            this.die();
        }
    },
 
    updateHealthBar() {
        if (this.healthBar) {
            let healthPercentage = this.currentHealth / this.maxHealth;
            this.healthBar.width = 100 * healthPercentage;
        }
    },
 
    die() {
        // 设置死亡标记
        if (this.isDying) return;
        this.isDying = true;
        
        // 使用 playEffect 播放音效
        if (this.deathAudio) {
            let audioId = cc.audioEngine.playEffect(this.deathAudio, false, 0.3);
            cc.audioEngine.setFinishCallback(audioId, () => {
                this.node.destroy();
            });
        } else {
            this.node.destroy();
        }
        // 生成星星
        this.spawnStars(3);
    },

    spawnStars(count) {
        if (!this.starPrefab) {
            cc.error('星星预制体未设置!');
            return;
        }

        const canvasNode = cc.find('Canvas');
        const worldPos = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        const gameManager = canvasNode.getComponent('GameManager');
        
        for (let i = 0; i < count; i++) {
            let star = cc.instantiate(this.starPrefab);
            star.parent = canvasNode;
            star.zIndex = 999;
            const localPos = canvasNode.convertToNodeSpaceAR(worldPos);
            
            // 随机位置偏移
            const offsetX = (Math.random() - 0.5) * 100;
            const offsetY = (Math.random() - 0.5) * 100;
            star.setPosition(localPos.x + offsetX, localPos.y + offsetY);
            
            // 获取目标星星收集点
            const starNode = cc.find('Canvas/game/starCollect/star');
            if (!starNode) {
                cc.error('找不到star node！');
                star.destroy();
                continue;
            }
            const worldTargetPos = starNode.getPosition();

            // 加载并播放收集音效
            cc.resources.load('audios/collect', cc.AudioClip, (err, audioClip) => {
                if (err) {
                    cc.error('加载收集音效失败:', err);
                    return;
                }
                cc.audioEngine.playEffect(audioClip, false, 3.0);
            });
                
            // 创建飞向目标的动作
            const moveAction = cc.sequence(
                cc.moveTo(0.5, worldTargetPos).easing(cc.easeBackIn()),
                cc.callFunc(() => {
                    // 通知GameManager增加星星数量
                    if (gameManager) {
                        gameManager.addStar();
                    }
                    star.destroy();
                })
            );
                
            star.runAction(moveAction);
        }
    },

    update(dt) {
        if (this.isDying) return;
        
        // 获取玩家节点
        let player = cc.find('Canvas/game/player');
        if (!player) {
            cc.warn('找不到玩家节点！请确保场景中玩家节点的路径是 Canvas/game/player');
            return;
        }
        
        // 获取世界坐标下的位置
        let monsterPos = this.node.parent.convertToWorldSpaceAR(this.node.position);
        let playerPos = player.parent.convertToWorldSpaceAR(player.position);
        
        // 计算与玩家的距离
        let distance = cc.Vec2.distance(
            cc.v2(monsterPos.x, monsterPos.y),
            cc.v2(playerPos.x, playerPos.y)
        );
        
        // 添加调试日志
        cc.log('怪物位置:', monsterPos, '玩家位置:', playerPos, '距离:', distance, '检测范围:', this.detectionRadius);
        
        // 在检测范围内
        if (distance < this.detectionRadius) {
            // 追踪玩家
            let direction = cc.v2(
                playerPos.x - monsterPos.x,
                playerPos.y - monsterPos.y
            ).normalize();
            
            let velocity = this.node.getComponent(cc.RigidBody).linearVelocity;
            velocity.x = direction.x * this.moveSpeed;
            velocity.y = direction.y * this.moveSpeed;
            this.node.getComponent(cc.RigidBody).linearVelocity = velocity;
            
            cc.log('怪物正在移动，速度:', velocity);
            
            // 发射炸弹
            this.shootBomb(player.position);
        } else {
            // 停止移动
            let velocity = this.node.getComponent(cc.RigidBody).linearVelocity;
            velocity.x = 0;
            velocity.y = 0;
            this.node.getComponent(cc.RigidBody).linearVelocity = velocity;
            cc.log('怪物停止移动，超出检测范围');
        }
    },
    
    shootBomb(targetPos) {
        const currentTime = cc.director.getTotalTime() / 1000;
        
        cc.log('尝试发射炸弹 - 当前时间:', currentTime, 
               '上次发射时间:', this.lastShootTime, 
               '发射间隔:', this.shootInterval,
               '是否可以发射:', (currentTime - this.lastShootTime >= this.shootInterval));
        
        if (currentTime - this.lastShootTime < this.shootInterval) {
            return;
        }
        
        if (!this.bombPrefab) {
            cc.error('炸弹预制体未设置！请在编辑器中设置 Monster 组件的 Bomb Prefab 属性');
            return;
        }
        
        this.lastShootTime = currentTime;
        
        // 创建炸弹
        let bomb = cc.instantiate(this.bombPrefab);
        if (!bomb) {
            cc.error('炸弹预制体实例化失败！');
            return;
        }
        
        // 设置炸弹位置为怪物当前位置
        bomb.setPosition(this.node.position);
        this.node.parent.addChild(bomb);
        
        // 计算方向（使用本地坐标）
        let direction = targetPos.sub(this.node.position);
        
        // 设置炸弹属性
        let bombComp = bomb.getComponent('Bomb');
        if (bombComp) {
            bombComp.setDirection(direction);
            bombComp.setSpeed(300); // 增加速度使炸弹移动更明显
            bombComp.setDamage(20);
            cc.log('炸弹已发射！方向:', direction, '目标位置:', targetPos, '当前位置:', this.node.position);
        } else {
            cc.error('炸弹没有Bomb组件！请确保炸弹预制体已添加 Bomb 组件');
            bomb.destroy();
        }
    }
});
