# Visual_NFT

App blockchain to view NFT

-----------

## Cloner le repo avec git bash : 
  $ git clone https://github.com/FredLC29/Visual_NFT.git .

## Se placer sur la branche de dev :
  $ git checkout develop

## Se créer une branche feature local :
  $ git checkout -b feat-<name> develop
  
## travailler localement sur sa branche local :
  $ git status
  
  $ git add <some-file>
  
  $ git commit

## Faire un rebase avant de pousher sa feature :
  $ git checkout develop
  
  $ git pull --rebase origin develop
  
  $ git rebase develop feat-<name>
  
## Livrer sa feature sur le repo develop
  $ git checkout develop
  
  $ git pull --rebase origin develop
  
  $ git merge --no-ff feat-<name>
  
  $ git push origin develop
  
## Résoudre les conflits
  Lors du rebase, on peut avoir des conflits qui seront indiquées dans le fichier, les lignes seront mises en evidence avec la version actuelle et la version concurrente. Il faut donc remettre manuellement le bon code.
  
  refaire ensuite :
  
  $ git add <fichier>
  
  $ git rebase --continue
  

  La branche main servira lors de nos diverses livraisons.

-------------------------------------------------------
## Rappel commandes Git principales
## Création d’une branche:
$git branch name
## Montrer les branches:
$git branch
## Changer de branche:
$git checkout name
## Ajouter une modification sur la branche:
$git add
$git commit 
## Fusionner les branches:
Retourner sur branch Master
Fusionner branch name avec branch Master
$git merge name
## Effacer la branche:
$git branch -d name







