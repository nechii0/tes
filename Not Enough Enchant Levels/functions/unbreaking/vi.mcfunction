clear @s z:unbreakingvi 0 1
scoreboard objectives add ench dummy
scoreboard players random @s ench 0 1
execute @s[scores={ench=0..1}] ~ ~ ~ structure load "unbreaking/vi" ~ ~ ~