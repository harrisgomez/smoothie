console.log('Server Punches Controller is loaded');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Punch = mongoose.model('Punch');
var Member = mongoose.model('Member');

module.exports = {
    create: function(req, res){
        console.log(req.params.id);
        Punch.create(req.body, function(err, punch){
            Member.findOne({_id: req.params.id}, function(err, member){
                punch._member = member._id;
                punch.save(function(err){
                    if(err){
                        console.log("Error in saving the punch");
                        return res.json(err);
                    }else{
                        member.punches.push(punch);
                        member.save(function(err){
                            if(err){
                                console.log("Error in saving the member");
                                return res.json(err);
                            }else{
                                console.log("Successfully pushed punch to member and saved both schemas");
                                Punch.find({}).populate('_member').exec(function(err){
                                    if(err){
                                        console.log("Error in pop exec of Punch schema");
                                        return res.json(err);
                                    }else{
                                        return res.json({message: `Successfully created a punch for ${member.f_name} ${member.l_name}`})
                                    }
                                })
                            }
                        })
                    }
                })
            })
        })
    }
}
