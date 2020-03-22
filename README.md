# thermostat

## User stories ##

1. Thermostat starts at 20 degrees
2. You can increase the temperature with an up function
3. You can decrease the temperature with a down function
4. The minimum temperature is 10 degrees
5. If power saving mode is on, the maximum temperature is 25 degrees
6. If power saving mode is off, the maximum temperature is 32 degrees
7. Power saving mode is on by default
8. You can reset the temperature to 20 with a reset function
9. You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
10. (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)


##Projec set up##
- Git clone the repo
- Navigate to root directory and run `bundle install`
- Create the PostgreSQL database

```
$ psql postgres
$ CREATE DATABASE thermostat;
$ \c thermostat;
$ CREATE TABLE data(id SERIAL PRIMARY KEY, temperature INT, power_saving BOOL);
````

##How to run the application##
- Navigate to the root of the project directory and start the server by typing the following command in the terminal:
```rb
rackup
```
- Open Chrome and visit (http://localhost:9292/)[http://localhost:9292/]
