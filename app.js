class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	introduction() {
		return "My name is " + this.name + " and I am " + this.age + " years old!"
	}
}

class CharacterGame {
	constructor(health, maxHealth, hitDamage, lifes, experience, level, isHero) {
		this.health = health
        this.maxHealth = maxHealth
        this.hitDamage = hitDamage
        this.lifes = lifes
		this.experience = experience
		this.level = level
		this.isHero = isHero
		this.isDead = false
	}
	createCharacter() {
		//return "health/maxHealth: " + this.health + "/" + this.maxHealth + "\r\n" + " hitDamage: " + this.hitDamage + "\r\n" + " lifes: " + this.lifes + "\r\n" + " experience: " + this.experience
		return CharacterGame
	}
}

const heroHealth = 100
const heroLifes = 2
const gainExperience = 50
const enemyHealth = 120

function resultCharacter(obj)
{
	return "health/maxHealth: " + obj.health + "/" + obj.maxHealth + "\r\n" + "hitDamage: " + obj.hitDamage + "\r\n" + "lifes: " + 
		obj.lifes + "\r\n" + "experience: " + obj.experience + "\r\n" + "is dead: " + obj.isDead
}

function fight(Hero, Enemy, isHeroAttack)
{
	var obj = []
	if (Hero.isHero)
	{
		//the attacker is hero
		if (isHeroAttack == true)
		{
			Enemy.health -= Hero.hitDamage
			if (Enemy.health <= 0)
			{
				Enemy.lifes -= 1
				Enemy.health = enemyHealth

				if (Enemy.lifes < 0)
				{
					Enemy.lifes = 0
					Enemy.health = 0
					Enemy.maxHealth = 0
					Enemy.isDead = true

					Hero.experience = gainExperience * Enemy.level
				}
			}
		}
		//the attacker is enemy
		else
		{
			
		}
	}
	
	obj.push(Hero)
	obj.push(Enemy)

	return obj
}

//let john = new Person("John Smith", 18)
//console.log(john.introduction())

//hero initiated
var stHealth = heroLifes * heroHealth
var stDamage = heroHealth
var stLifes = heroLifes
var stExperience = 0
var stLevel = 2
var stMaxHealth = heroLifes * heroHealth
var isHero = true

let Hero = new CharacterGame(stHealth, stMaxHealth, stDamage, stLifes, stExperience, stLevel, isHero)
console.log( "Hero First" + "\r\n" + resultCharacter(Hero))

//enemy initiated
stHealth = 120
stDamage = 60
stLifes = 1
stExperience = 0
stLevel = 4
stMaxHealth = stHealth
isHero = false
let Enemy = new CharacterGame(stHealth, stMaxHealth, stDamage, stLifes, stExperience, stLevel, isHero)

//hero dies health become 70%

//Hero attack
//enemy hit 1
var result = fight(Hero, Enemy, true)
console.log("result: " + result.length)

Enemy = result[1]
console.log("1. Enemy status: " + "\r\n" + resultCharacter(Enemy))

//Hero attack
//enemy hit 2
result = fight(Hero, Enemy, true)
Enemy = result[1]
console.log("2. Enemy status: " + "\r\n" + resultCharacter(Enemy))

//Hero attack
//enemy hit 3
result = fight(Hero, Enemy, true)
Enemy = result[1]
console.log("3. Enemy status: " + "\r\n" + resultCharacter(Enemy))

//Hero attack
//enemy hit 4
result = fight(Hero, Enemy, true)
Enemy = result[1]
console.log("4. Enemy status: " + "\r\n" + resultCharacter(Enemy))

console.log( "Hero Status" + "\r\n" + resultCharacter(Hero))