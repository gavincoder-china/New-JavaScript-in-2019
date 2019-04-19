new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],


    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;

        },
        attack: function () {
            //    设计一个伤害值
            var damage = this.calculateDamage(3, 10);  //这边时玩家的伤害值
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: "you hit monster" + damage + "blood"
               
            });

            //   在这边判断是否成功消灭了怪兽
            if (this.checkWin()) {
                return;
            }
            // damage = this.calculateDamage(3, 12);//这边是怪兽的伤害值
            this.monsterAttack();

        },
        specialAttack: function () {
            var damage = this.calculateDamage(12, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: "you hit monster" + damage + "blood"

            });
            if (this.checkWin()) {
                return;
            }

            this.monsterAttack();
        },
        heal: function () {
            var health = this.calculateDamage(8, 15);
            this.playerHealth += health;
            this.turns.unshift({
                isPlayer: true,
                text: "you add" + health + "blood"

            });
            if (this.checkWin()) {
                return;
            }

            this.monsterAttack();

        },
        giveUp: function () {

            this.gameIsRunning = false;
        },
        calculateDamage: function (min, max) {

            return Math.max(Math.floor(Math.random() * max) + 1, min);

        },
        monsterAttack: function () {
            var damage = this.calculateDamage(3, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: "monster hit you" + damage + "blood"

            });
            this.checkWin();


        }
        ,
        checkWin: function () {
            if (this.monsterHealth <= 0) {

                if (confirm("you won !new game?")) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm("you lost !new game?")) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
    },



})