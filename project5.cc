int count = 0;

// Main control loop
  while(true) { 
      // Update information from the robot.
      robot.Read();

      // Read new information about position
      pose = readPosition(lp);

      // Print data on the robot to the terminal
      printRobotData(bp, pose);

      // Print information about the laser. Check the counter first to stop
      // problems on startup
      if(counter > 2){
				printLaserData(sp);
      }

      // Print data on the robot to the terminal --- turned off for now.
      // printRobotData(bp, pose);
      
      // If either bumper is pressed, stop. Otherwise just go forwards

      if(bp[0] || bp[1]){
				speed= 0;
				turnrate= 0;
      } else {
					
					double distance; // Defines the distance between each point
					std::cout << "distance: " << distance << std::endl;
					std::cout << "count: " << count << std::endl;
					
					turnrate = 0.2;// Allows the robot to spin at first
	
					//-0.00858347
					if(count == 0){
						if(pose.pa > -0.1 && pose.pa < 0){// This goes to (-2.5, -6)
							count++;
							distance = sqrt(pow(plan[0] - pose.px, 2) + pow(plan[1] - pose.py, 2) * 1.0);
        			turnrate = 0;
          		speed = 0.7;

        			if(distance < 5){
            		speed = speed -0.1;
        			}

        			if(distance < 0.3){
            		speed = 0;
								turnrate = 0.3;
        			}
    				}
    			}// End of the count == 0 if statment
					
					if(count == 1){
						if(pose.pa > 1.5 && pose.pa < 1.6){// This goes to (-2.5, 1.5)
							count++;
							distance = sqrt(pow(plan[2] - pose.px, 2) + pow(plan[3] - pose.py, 2) * 1.0);
							turnrate = 0;
							speed = 0.7;
							
							if(distance < 5){
		            speed = speed -0.1;
		        	}

		        	if(distance < 0.3){
		          	speed = 0;
								turnrate = 0.3;
        			} 
					}
				}// End of the count == 0 if statment
					if(count == 2){
						
						if(pose.pa > 1.3 && pose.pa < 1.4){// This goes to (The next point I forgot the point)
								count++;
								distance = sqrt(pow(plan[4] - pose.px, 2) + pow(plan[5] - pose.py, 2) * 1.0);
								turnrate = 0;
								speed = 0.7;
								
								if(distance < 5){
						    	speed = speed -0.1;
						    }

						    if(distance < 0.3){
						      speed = 0;
									turnrate = 0.3;
									std::cout << "HERE: " << pose.pa << std::endl;
						    } 
								
							}
					}
				}    
      
      // What are we doing?
      std::cout << "Speed: " << speed << std::endl;      
      std::cout << "Turn rate: " << turnrate << std::endl << std::endl;

      // Send the commands to the robot
      pp.SetSpeed(speed, turnrate);  
      // Count how many times we do this
      counter++;
    }// End of the while loop