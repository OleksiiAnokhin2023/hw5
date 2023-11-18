class Warrior {
    constructor(){
        this.warrior_level = 1;
        this.warrior_rank = "Pushover";
        this.warrior_experience  =100;
        this.mass_of_rank = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror",
            "Champion", "Master", "Greatest"];
        this.warrior_achievements = [];
    }
    rank_count(num){
        return Math.floor(num/10);
    }
    level_rank_calc(){
        if(this.warrior_experience>10000) this.warrior_experience =10000;
        this.warrior_level=Math.floor(this.warrior_experience/100);
        this.warrior_rank = this.mass_of_rank[this.rank_count(this.warrior_level)];

    }
    battle(enemy_level){

        if(enemy_level>=1 && enemy_level<=100){
            this.enemy_level = enemy_level;
            this.diff = this.enemy_level - this.warrior_level;
            if (this.rank_count(this.warrior_level)<this.rank_count(this.enemy_level) && this.diff >=5 ){
                return "You've been defeated";
            }
            else{
                switch (this.enemy_level){
                    case this.warrior_level :
                        this.warrior_experience +=10;
                        break;
                    case this.warrior_level-1 :
                        this.warrior_experience +=5;
                        break;
                    case this.warrior_level - 2:
                        this.warrior_experience +=0;
                        break;
                }
                if(this.enemy_level>this.warrior_level){
                    this.warrior_experience += 20 * this.diff * this.diff;
                }
                if( this.diff <= -2) {
                    this.level_rank_calc();
                    return "Easy fight";
                }
                else if(this.diff ===-1 || this.diff ===0){
                    this.level_rank_calc();
                    return "A good fight";
                }
                else if (this.diff >=1){
                    this.level_rank_calc();
                    return "An intense fight";
                }
            }}
        else return "Invalid level";
    }
    level(){
        return this.warrior_level;
    }
    rank(){
        return this.warrior_rank;
    }
    experience(){
        return this.warrior_experience;
    }
    achievements(){
        return this.warrior_achievements;
    }
    clear(){
        this.warrior_experience =100;
    }


    training([description,get_xp,min_requirements]){
        if(this.warrior_level >= min_requirements){
            this.warrior_experience += get_xp;
            this.level_rank_calc();
            this.warrior_achievements.push(description);
            return description;
        }
        else return  "Not strong enough";
    }
}



























