The art of refactoring - 3 ideas shown at 3 samples
===================================================

Preface
-------

I just want to start this blog with some refactoring methods that helped me a lot to write better code. My work is inspired by Martin Fowler (recommending
checking out his blog at https://martinfowler.com/) and  Robin C. Martin's book clean code and further work of him
beside many others.

This blog post is for someone who has programmed for a while and experienced the mess of having to work in a bad code
base. While most of us will notice, that a code base is "bad"; it is hard to determine the WHY as it is a matter of
quality. Like in other professions, e.g. a home builder, a novice will only have a glimpse of the quality and
most likely will notice it by having to face the consequences, e.g. when water leaks in. It requires a craftsman to see
these effects in advance and by beeing aware of, he can fix it before the problem worthens.

So in my opinion, it is not so important to write the perfect piece of software, but to fix mistakes which bite you in
the long run.

The demonstrated samples apply across different programming languages. I've chosen Python 3 for demonstration because I
think it's easy to read even if you don't know the language.


Refactoring sample 1: Naming
----------------------------

Just consider the following class names without knowing there implementation:

``` python
class DatabaseHandler:
    ...

class DatabaseService:
    ...

class DatabaseManager:
    ...

class DatabaseConnection:
    ...

class DatabaseHelper:
    ...
```

or the following function names:

``` python
def start(...):
    ...

def connect(...):
    ...

def open(...):
    ...

def create(...):
    ...
```

Try to think what you would expect of each class and function. Now lets put it together:

``` python
class DatabaseConnection:
    def start(...):
        ...

    def exec(...):
        ...

    def close(...):
        ...
```

Does this code meet your expectations? I hope not. While it seems like not a big issue, you wouldn't expect a close
method on an object that has a start method. Also a DatabaseConnection is something which doesn't need to be started.


Now consider this example and notice the advantage in readability while having the same functionality:
``` python
class DatabaseHandler:
    def open(...):
        ...

    def exec(...):
        ...

    def close(...):
        ...
```

This is what naming is all about. There are many "keywords" which are unique across languages. You will notice them
by reading code of others and get an odd feeling when they are used in a wrong context. It takes time to think about
each keyword and when to use it, but it is worth it because once you remember how each keyword is used (e.g. "handler",
"connection", "container", "util") your code will be much easier to understand and work with.

Some keywords are also a bad smell, e.g. "manager" because it is often used for a class which is too big and does too
many things.


Refactoring sample 2: No proper definition of functions/ classes/ files/ modules
-------------------------------------------------------------------------------

Coming from naming it is important to structure the code on multiple hierarchies. In software projects, there are
different levels, often something like this: module -> file -> class -> function (from top to bottom).

This structure is very important as this is your main tool to structure your code.

E.g. consider following project structure:

``` markdown
model
|-> user

dbutils
|-> insert
|-> read
|-> update
|-> delete
```

You might think, that this looks good, but it is not. Consider what happens, when there are new domain models. Your
code might easily start looking like this:

or this:

``` markdown
model
|-> user
|-> machines
|-> sensors

dbutils
|-> insert
|-> read
|-> update
|-> delete
```

What do you think the insert directory or file looks like? It's certainly a mess. Also consider when working on the user
dbutils functionality. You have to jump across 4 different places, all clutered with code from machine's and sensor's
db-functionality.

It would be much better to do order models via domain instead of technicality:

``` markdown
model
|-> user
|-> machines
|-> sensors

dbutils
|-> user
|-> machines
|-> sensors
```


Having duplication in data models: boolean and nullables
--------------------------------------------------------

Often boolean and nullables are
