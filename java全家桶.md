# java全家桶

### java基础

###### **1.JDK 和JRE有什么区别**

- JDK是java开发工具包
- JRE是运行环境
- JDK包含了JRE，但是，JRE可以独立安装的,JRE包含了JVM

**2.==和equals的区别**

- 1）对于==，比较的是值是否相等

  ​        如果作用于基本数据类型的变量，则直接比较其存储的 “值”是否相等；

  　　如果作用于引用类型的变量，则比较的是所指向的对象的地址

  2）对于equals方法，注意：equals方法不能作用于基本数据类型的变量，equals继承Object类，比较的是是否是同一个对象

  　　如果没有对equals方法进行重写，则比较的是引用类型的变量所指向的对象的地址；

  　　诸如String、Date等类对equals方法进行了重写的话，比较的是所指向的对象的内容。

3.**两个对象的hashCode()相同,则equals()也一定为true,对吗?**

- 首先，答案肯定是不一定。同时反过来equals为true，hashCode也不一定相同。

- 类的hashCode方法和equals方法都可以重写，返回的值完全在于自己定义。

- hashCode()返回该对象的哈希码值；equals()返回两个对象是否相等。

   

  关于hashCode和equal是方法是有一些 常规协定 ：

  1、两个对象用equals()比较返回true，那么两个对象的hashCode()方法必须返回相同的结果。

  2、两个对象用equals()比较返回false，不要求hashCode()方法也一定返回不同的值，但是最好返回不同值，亿提搞哈希表性能。

  3、重写equals()方法，必须重写hashCode()方法，以保证equals方法相等时两个对象hashcode返回相同的值。

**4.final在JAVA中的作用**

-   final关键字可以用于三个地方。用于修饰类、类属性和类方法。
-  被final关键字修饰的类不能被继承，被final关键字修饰的类属性和类方法不能被覆盖（重写）；
- 对于被final关键字修饰的类属性而言，子类就不能给他重新赋值了，如果重新赋值，会报错
- 重写：只要子类方法与父类方法同名同参数就是重写。

**5.java中的math.round(-1.5)等于多少**

- Math.round(-1.5)的返回值是-1。四舍五入的原理是在参数上加0.5然后做向下取整。

**6.String属于基本的数据类型吗？**

- String不是基本数据类型，而是一个类（class），是C++、java等编程语言中的字符串。

###### **java 中操作字符串都有哪些类？它们之间有什么区别？**

- String、StringBuffer、StringBuilder
- String : final修饰，String类的方法都是返回new String。即对String对象的任何改变都不影响到原对象，对字符串的修改操作都会生成新的对象。
- StringBuffer 和StringBuilder相比较:StringBuffer  对字符串的操作的方法都加了synchronized，保证线程安全。
- StringBuilder : 不保证线程安全，在方法体内需要进行字符串的修改操作，可以new StringBuilder对象，调用
- StringBuilder对象的append、replace、delete等方法修改字符串。

**String str="i"与String str=new String("i")一样吗?**

-  在栈中创建str1的引用。
-  去常量池中查看是否有相同Unicode编码的字符串常量。如果有将str1指向该常量，如果没有则创建一个内容为”str1”的字符串常量，将str1的引用指向该常量。
-  如果str1进行了赋值str1= “123”,则栈中的str1的引用指向新的内容为“123”的字符串常量。
-  String str1 = “str1”; String str2 = “str1”;str2的引用指向常量池中已经存在的内容为“str1”的常量，不会重新创建新的常量，str1和str2的引用指向同一个常量。

**String类的常用方法有哪些?**

- indexOf() 返回指定字符得索引
- charAt() 返回指定索引处得字符
- repalce() 字符串替换
- trim() 去除字符串两端的空白
- split() 分割字符串 返回分割后的字符串数组
- getBytes() 返回字符串的byte类型数组
- length() 返回字符串的长度
- toLowerCase() 字符串转小写
- toUpperCase() 字符串转大写
- substring() 截取字符串
- equals() 字符串比较

**string和string buffer的区别**

- string :不可变字符串
- StringBuffer:可变字符序列,效率低,线程安全
- StringBuilder(JDK1.5):可变字符序列,效率高,线程不安全

**java中IO流分为几种?**

- 按照数据的流向：
  输入流、输出流
- 按照流数据的格式：
  字符流、字节流
- 按照流数据的包装过程：
  节点流（低级流）、处理流（高级流）

### 容器&集合

**collection和collections的区别**

- Collection是集合类的上级接口，继承与他有关的接口主要有List和Set
- Collections是针对集合类的一个帮助类，他提供一系列静态方法实现对各种集合的搜索、排序、线程安全等操作

**List,set,map之间的区别**

- List 集合中对象按照索引位置排序，可以有重复对象，允许按照对象在集合中的索引位置检索对象，例如通过list.get(i)方法来获取集合中的元素；
 - Map 中的每一个元素包含一个键和一个值，成对出现，键对象不可以重复，值对象可以重复；
 - Set 集合中的对象不按照特定的方式排序，并且没有重复对象，但它的实现类能对集合中的对象按照特定的方式排序，例如 Tree Set 类，可以按照默认顺序，也可以通过实现 Java.util.Comparator< Type >接口来自定义排序方式。 

**HashMap和HashTabe有什么区别?**

- HashMap线程不安全,查询速度快,可以有一个键为null
- hashTabe线程安全,查询慢,键不能为null

**什么是HashMap?**

- HashMap实现了Map接口，Map接口对键值对进行映射。Map中不允许重复的键。Map接口有两个基本的实现，HashMap和TreeMap。TreeMap保存了对象的排列次序，而HashMap则不能。HashMap允许键和值为null。HashMap是非synchronized的，但collection框架提供方法能保证HashMap synchronized，这样多个线程同时访问HashMap时，能保证只有一个线程更改Map。

**说一下HashMap的实现原理?**

- JDK7中使用的是数组+链表的结构。JDK8中使用的是数组+链表+红黑树，在链表长度大于8时转为红黑树。
- HashMap基于hashing原理，我们通过put()和get()方法储存和获取对象。当我们将键值对传递给put()方法时，它调用键对象的hashCode()方法来计算hashcode，让后找到bucket位置来储存值对象。当获取对象时，通过键对象的equals()方法找到正确的键值对，然后返回值对象。HashMap使用链表来解决碰撞问题，当发生碰撞了，对象将会储存在链表的下一个节点中。 HashMap在每个链表节点中储存键值对对象

**说一下HashSet的实现原理?**

- HashSet是Set接口的实现类，同样通过计算hashCode存储对象集合，它不允许集合中有重复的值。当我们使用HashSet存储对象时，首先要确保对象重写的equals()和hashCode()以免在集合中出现重复的对象。如果没有重写这两个方法，则使用默认的函数。HashSet通过add方法进行对象的添加

###### **HashMap和ConcurrentHashMap的区别**

- 在进行迭代时，HashTable会锁住整个Map，而ConcurrentHashMap只锁住Map的一部分，所以ConcurrentHashMap在多线程环境下的性能更好
- 最大的区别就是ConcurrentHashMap是线程安全的，hashMap不是线程安全的
- 1、ConcurrentHashMap对整个桶数组进行了分段，而HashMap则没有
  2、ConcurrentHashMap在每一个分段上都用锁进行保护，从而让锁的粒度更精细一些，并发性能更好，而HashMap没有锁机制，不是线程安全的

###### **说说对于HashMap扩容的理解**

- 在addEntry()方法时会对阈值进行检测，当Entry的数量大于等于阈值。并且当前table位置上存在Entry。那么进行resize()。
- 具体的resize()过程，遍历table重新进行散列。因为JDK7采用的是头插法，所以rehashing之后的链表是逆序的。
- 计算rehash，判断扩容的时候是否需要重新计算hash值
- jdk1.7中重新插入到新数组的元素，如果原来一条链上的元素又被分配到同一条链上那么他们的顺序会发生倒置

###### **ArrayList和LinkedList的区别?**

- ArrayList是实现了基于动态数组的数据结构，LinkedList基于链表的数据结构。 
- 对于随机访问get和set，ArrayList优于LinkedList，因为ArrayList可以随机定位，而LinkedList要移动指针一步一步的移动到节点处。（参考数组与链表来思考）
- 对于新增和删除操作add和remove，LinedList比较占优势，只需要对指针进行修改即可，而ArrayList要移动数据来填补被删除的对象的空间。(ArrayList查询快,增删慢,LinedList查询慢,增删快)

**如何实现数组和list的转换**

- List转数组：toArray(arraylist.size()方法
- 数组转List：Arrays的asList(a)方法

**ArrayList和Vector的区别**

-  Vector是线程安全的，也就是说是它的方法之间是线程同步的，而ArrayList是线程序不安全的，它的方法之间是线程不同步的
- 存储进它们里面的元素的个数超过了容量时,ArrayList与Vector的存储空间扩容时。Vector增长原来的一倍，ArrayList增加原来的0.5倍

###### **java为什么要序列化和反序列化,如何实现序列化**

- 序列化就是一种用来处理对象流的机制，所谓对象流也就是将对象的内容进行流化。可以对流化后的对象进行读写操作，也可将流化后的对象传输于网络之间。
- 实现方式是实现java.io.Serializable接口.这个接口不需要实现任何具体方法.只要implements
  java.io.Serializable 就好了
- 序列化：把Java对象转换为字节序列的过程。
- 反序列化：把字节序列恢复为Java对象的过程。
- 对象的序列化主要有两种用途：
  　　1） 把对象的字节序列永久地保存到硬盘上，通常存放在一个文件中；
    　　2） 在网络上传送对象的字节序列。

###### **Array与ArrayList有什么区别**

   精辟阐述：

-  可以将 ArrayList想象成一种“会自动扩增容量的Array”。
-  Array（[]）：最高效；但是其容量固定且无法动态改变；
-  ArrayList：  容量可动态增长；但牺牲效率  

**哪些集合线程是安全的**

- Vector、HashTable、Properties是线程安全的；
- ArrayList、LinkedList、HashSet、TreeSet、HashMap、TreeMap等都是线程不安全的。
- 为了保证集合是线程安全的，相应的效率也比较低；线程不安全的集合效率相对会高一些。

###### **HashMap和LinkedHashMap的区别**

- HashMap是一个最常用的Map,它根据键的HashCode 值存储数据,根据键可以直接获取它的值，具有很快的问速度。HashMap最多只允许一条记录的键为Null;允许多条记录的值为 Null;HashMap不支持线程的同步，即任一时刻可以有多个线程同时写HashMap;可能会导致数据的不一致。如果需要同步，可以用 Collections的synchronizedMap方法使HashMap具有同步的能力。
- LinkedHashMap也是一个HashMap,但是内部维持了一个双向链表,可以保持顺序

### 多线程

**线程与进程的区别**

- 进程：是并发执行的程序在执行过程中**分配和管理资源的基本单位**，是一个动态概念，竞争计算机系统资源的基本单位。

- 线程：**是进程的一个执行单元**，是进程内科调度实体。比进程更小的独立运行的基本单位。线程也被称为轻量级进程。

  一个程序至少一个进程，一个进程至少一个线程。

**守护线程是什么?**

- 守护线程，专门用于服务其他的线程，如果其他的线程（即用户自定义线程）都执行完毕，连main线程也执行完毕，那么jvm就会退出（即停止运行）——此时，连jvm都停止运行了，守护线程当然也就停止执行了。

**创建线程的几种方式**

- 继承Thread类创建线程
- 实现Runnable接口创建线程
- 使用Callable和Future创建线程
- 使用线程池例如用Executor框架

###### **Runnable和Callable的区别**

- Runnable执行方法是run(),Callable是call()
- 实现Runnable接口的任务线程无返回值；实现Callable接口的任务线程能返回执行结果
- call方法可以抛出异常，run方法若有异常只能在内部消化

**线程有哪些状态**

- 新建,就绪,运行,阻塞,死亡

###### **java中sleep()和wait()区别**

- sleep方法是Thread类的静态方法,wait()是Object超类的成员方法
- sleep方法需要抛异常,wait方法不需要
- sleep方法可以在任何地方使用,wait方法只能在同步方法和同步代码块中使用

###### **notify和notifyall区别**

- notify():唤醒在此对象监视器上等待的单个线程。如果所有线程都在此对象上等待，则会选择唤醒其中一个线程。选择是任意性的，并在对实现做出决定时发生。线程通过调用其中一个 `wait` 方法，在对象的监视器上等待。
- notifyAll():唤醒在此对象监视器上等待的所有线程。线程通过调用其中一个 `wait` 方法，在对象的监视器上等待。

###### **线程的start和run方法有什么不同?**

- 调用 start() 方法是用来启动线程的，轮到该线程执行时，会自动调用 run()；直接调用 run() 方法，无法达到启动多线程的目的，相当于主线程线性执行 Thread 对象的 run() 方法。
- 一个线程对线的 start() 方法只能调用一次，多次调用会抛出 java.lang.IllegalThreadStateException 异常；run() 方法没有限制

###### **创建线程池有哪几种方式?**

- newCachedThreadPool创建一个**可缓存**线程池，如果线程池长度超过处理需要，可灵活回收空闲线程，若无可回收，则新建线
- newFixedThreadPool 创建一个**定长**线程池，可控制线程最大并发数，超出的线程会在队列中等待。
- newScheduledThreadPool 创建一个定长线程池，支持定时及周期性任务执行。
- newSingleThreadExecutor 创建一个**单线程化**的线程池，它只会用唯一的工作线程来执行任务，保证所有任务按照指定顺序(FIFO, LIFO, 优先级)执行。

 **线程池都有哪些状态**

- 线程池的有5种状态：RUNNING(跑)、SHUTDOWN(关闭)、STOP(停止)、TIDYING(整理)、TERMINATED(终止形态)

###### **线程池中 submit()和 execute()方法有什么区别?**

- 接收的参数不一样
- 对返回值的处理不同:execute方法不关心返回值。submit方法有返回值，Future。
- 对异常的处理不同:excute方法会抛出异常。sumbit方法不会抛出异常。除非你调用Future.get()。

###### **什么是死锁?**

- 死锁是指多个进程因竞争资源而造成的一种僵局（互相等待），若无外力作用，这些进程都将无法向前推进。
- java 死锁产生的四个必要条件:
  - 互斥使用
  - 不可抢占
  - 请求和保持
  - 循环等待

###### **怎么防止死锁?**

- 在有些情况下死锁是可以避免的。本文将展示三种用于避免死锁的技术：
- 加锁顺序 :如果能确保所有的线程都是按照相同的顺序获得锁，那么死锁就不会发生
- 加锁时限 :获取锁的时候加一个超时时间
- 死锁检测 :允许死锁的发生,但是操作系统会不断监视系统的进展情况,判断死锁是否真的发生,一旦死锁真的发生则采取专门的措施,解除死锁并以最小的代价恢复操作系统的运行

###### **ThreadLocal是什么?有哪些使用场景**

- ThreadLocal 是线程本地存储，在每个线程中都创建了一个ThreadLocalMap 对象，每个线程可以访问自己内部 ThreadLocalMap 对象内的 value。
- 经典的使用场景是为每个线程分配一个 JDBC 连接 Connection。这样就可以保证每个线程的都在各自的 Connection 上进行数据库的操作，不会出现 A 线程关了 B线程正在使用的 Connection； 还有 Session 管理 等问题。

###### **说一下synchronized底层实现原理?**

- 同步代码块是通过 monitor enter 和 monitor exit 指令获取线程的执行权
- 同步方法通过加 ACC_SYNCHRONIZED 标识实现线程的执行权的控制
- Java 虚拟机中的同步(Synchronization)基于进入和退出管程(Monitor)对象实现， 无论是显式同步(有明确的 monitorenter 和 monitorexit 指令,即同步代码块)还是隐式同步都是如此。在 Java 语言中，同步用的最多的地方可能是被 synchronized 修饰的同步方法。同步方法 并不是由 monitorenter 和 monitorexit 指令来实现同步的，而是由方法调用指令读取运行时常量池中方法的 ACC_SYNCHRONIZED 标志来隐式实现的，关于这点，稍后详细分析。下面先来了解一个概念Java对象头，这对深入理解synchronized实现原理非常关键。

###### **synchronized和volatile的区别是什么**

- volatile只能保证可见性,不能保证原子性
- synchronized既保证可见性也能保证原子性,但是效率相对要比volatile低得多

### 设计模式

###### **设计模式有哪些常用的**

- 单例(懒汉模式、饿汉模式)
  - 构造方法私有化，除了自己类中能创建外其他地方都不能创建
  - 在自己的类中创建一个单实例（饿汉模式是一出来就创建创建单实例，而懒汉模式需要的时候才创建）
  - 提供一个方法获取该实例对象(创建时需要进行方法同步)
- 工厂模式:Spring IOC就是使用了工厂模式, 对象的创建交给一个工厂去创建。
- 代理模式:Spring AOP就是使用的动态代理。
- 原型模式:原型模式就是用**原型实例指定创建对象的种类**，并且通过**复制这些原型**创建新的对象。
  - 浅克隆：当原型对象被复制时，只复制它本身和其中包含的值类型的成员变量，而**引用类型的成员变量**并没有复制。
  - 深克隆：除了对象本身被复制外，对象所包含的**所有成员变量**也将被复制。

### Spring/Spring MVC

**为什么要使用spring?**

- 方便解耦，简化开发(IOC)
- AOP 编程的支持
- 声明式事务的支持
- 方便程序的测试
- 方便集成各种优秀框架 SSM
- 降低 JavaEE API 的使用难度
- Java 源码是经典学习范例

**POI是什么?导出excel超过最大行数怎么解决**

- POI是对excel表格的数据写入和存储,解析excel的工具
- 大批量写入数据用SXSSFWorkbook
- 可以分sheet页,数据迁移，多导出几个xlsx就行了
- 03格式的excel文件(.xls)最多只支持65536行,所以当需要处理的数据超过65536时,便不能使用HSSFWorkbook了,即不能用03格式的excel了,07格式的excel文件(.xlsx)对应的方法是:XSSFWorkbook(POI自动分页功能)

**什么是AOP(Aspect Oriented Programming)?**

- **面向切面编程**
- 在程序运行期间，在不修改源码的情况下对方法进行功能增强
- 是通过预编译方式和运行期动态代理

**什么是IOC(Inverse Of Control)?**

- 在编写程序时，通过**控制反转**，把对象的创建交给了 Spring，但是代码中不可能出现没有依赖的情况。IOC 解耦只是降低他们的依赖关系，但不会消除
- **DI依赖注入**（Dependency Injection）：它是 Spring 框架核心 IOC 的具体实现。

**Spring框架主要有哪些模块**

- Spring AOP  面相切面编程
- Spring  ORM  Hibernate|mybatis|JDO 对象关系映射
- Spring Core  提供bean工厂 IOC
- Spring Dao  JDBC支持
- Spring Context  提供了关于UI支持,邮件支持等
-  Spring Web 提供了web的一些工具类的支持
- Spring MVC  提供了web mvc , webviews , jsp ,pdf ,export

**Spring常用的注入方式有哪些?**

- 构造方法注入，set方法参数注入，接口注入

**Spring自动装配bean有哪些方式?**

- 自动化装配
- 通过java代码装配bean
- 通过xml装配bean

**Spring的事务的实现方式有哪些?**

- （1）编程式事务管理：需要手动编写代码，在实际开发中很少使用
- （2）声明式事务管理：
- （2.1）基于TransactionProxyFactoryBean的方式，需要为每个进行事务管理的类做相应配置
- （2.2）基于AspectJ(面向切面)的XML方式，不需要改动类，在XML文件中配置好即可
- （2.3）基于注解的方式，配置简单，需要在业务层类中添加注解

###### **spring事务的传播机制（HibernateTransactionManager）**

  **propagation_ required **1.如果当前**没有**事务，就**新建**一个事务；如果**已存**在一个事务，就**加入**到这个事务中。

   **propagation_ supports** 2.**支持当前**事务，如果当前**没有**事务，以**非事务**方式执行。

​    **propagation_ mandatory**3.使用当前事务，如果当前**没有**事务，则**抛出异常。**

**propagation_ required _ new**  4.新建事务，如果当前存在事务，则把当前事务挂起。

  5.以非事务方式执行，如果当前存在事务，则把当前事务挂起。

  6.以非事务方式执行，如果当前存在事务，则抛出异常。

  7.如果当前存在事务，则在嵌套事务内执行。如果当前没有事务，则执行与 1. 类似的操作。

###### **Spring的事务隔离**

- 隔离性是当多个用户并发访问数据库时，比如操作同一张表时，数据库为每一个用户开启的事务，不能被其他事务的操作所干扰，多个并发事务之间要相互隔离。
- DEFAULT 这是一个PlatfromTransactionManager默认的隔离级别，使用数据库默认的事务隔离级别.
  未提交读（read uncommited） :脏读，不可重复读，虚读都有可能发生
  已提交读 （read commited）:避免脏读。但是不可重复读和虚读有可能发生
  可重复读 （repeatable read） :避免脏读和不可重复读.但是虚读有可能发生.
  串行化的 （serializable） :避免以上所有读问题.
  Mysql 默认:可重复读
  Oracle 默认:读已提交

###### **SpringMVC的运行流程**

- 用户发送请求后,**前端控制器 (DispactherServlet)**接收请求
- 前端控制器会根据请求的url去**处理器映射器(HandlerMapping)**查找处理器,处理器映射器返回处理器到前端控制器.
- 前端控制器会带着请求和处理器去**处理器适配器(HandlerAdapter)**找合适的**处理器(Handler)**
- 处理器处理业务请求,返回ModeAndView到处理器适配器,然后再次返回给前端控制器
- 前端控制器会带着ModeAndView去请求**视图解析器(View Resolver)**,根据视图名生成视图对象,再给前端控制器返回视图对象
- 然后进行视图渲染,然后再返回响应处理给用户

###### **SpringMVC有哪些组件**

- 前端控制器组件（DispatcherServlet） 
- 处理器组件（Controller） 
- 处理器映射器组件（HandlerMapping） 
- 处理器适配器组件（HandlerAdapter） 
- 拦截器组件（HandlerInterceptor） 
- 视图解析器组件（ViewResolver） 
- 视图组件（View） 
- 数据转换组件（DataBinder） 
- 消息转换器组件（HttpMessageConverter）

###### **spring/spring boot /spring cloud的註解**

@Controller 控制层，里面有多个连接
 @Service 业务层，一般对于接口和实现
 @Qualifier 如果一个接口有多个实现，那么注入时候加上唯一标示
 @Repository 一般的dao层
 @Autowired 自动注入依赖
 @RequestMapping （value=’’,method={RequestMethod。GET或者POSt}）绑定url
 @RequestParam (value=’’ required=false)绑定参数
 @ModelAttribute 一般用于controller层，呗注解的方法会在所以mapping执行之前执行，并且可以绑定参数到Model model里面。
 @Transactional （readOnly=true）注解式事务
 @Value（“${}”）可以注入properties里面的配置项
 @ControllerAdvice 是spring3提供的新注解，控制器增
 @ExceptionHandler  如果在controller方法遇到异常，就会调用含有此注解的方法。@EnableDiscoveryClient  与@EnableEurekaCLient 具有相同的功能，不同的事该注解同时可以注册Zookeper，也可用于服务发现，标注在主启动类上；
 @InitBinder 一般用于controller 可以将所以form 讲所有传递进来的string 进行html编码，防止xss攻击，比如可以将字符串类型的日期转换成date类型
 @EnableCaching 注解自动化配置合适的缓存管理器。
 @EnableWebSecurity 注解开启spring security的功能，集成websercrityconfigureadapter。
 **@SringBootApplication**相当于@configuration，@EnableAutoConfiguation @ComponentScan三个注解合用。
 @EnableDiscoveryclient 自定义服务发现的客服端
 @EnableAdminServer 使用admin监控应用。
 **@EnableEurekaClient**配置本应用将使用服务注册和服务发现，注意：注册和发现用这个注解。
 **@EnableHystrix**表示启动断路器，断路器依赖于服务注册和发现。
 **@HystrixCommand**注解方法失败后，系统将西东切换到fallbackMethod方法执行，
 @EnableAutoConfiguration spring boot自动配置，尝试根据你添加的jar依赖自动配置你的spring应用。
 @ComponentScan 表示将该类自动发现并注册bean 可以自动收集所有的spring组件
 @Comfiguration 相当于传统的xml配置文件
 @Import 导入其他配置类
 @ImportResource用来 加载xml配置文件
 @FeignClient注解中的fallbank属性指定回调类
 @ResController是@controller和@ResponseBody的结合体

@EnableDiscoveryClient 与@EnableEurekaCLient 具有相同的功能，不同的事该注解同时可以注册Zookeper，也可用于服务发现，标注在主启动类上；

**@RequestMapping的作用**

- @RequestMapping是一个用来**处理请求地址映射的注解**，可用于类或者方法上。用于类上，表示类中的所有响应请求的方法都是以该地址作为父路径。

**@Autowired的作用**

- @Autowired 是一个注释，它可以对类成员变量、方法及构造函数进行注入，让 spring 完成 bean 自动装配的工作。

### SpringBoot/SpringCloud

###### **什么的Spring boot**

- springBoot是一个可以快速构建Spring项目的脚手架,尽可能减少xml的文件配置,springBoot内嵌tomcat,所以可以进行快速启动项目进行测试,非常的轻便。

###### **为什么要使用springboot?**

- Spring存在天生缺陷(**jar包的依赖导入**)和(**配置文件过于繁琐**),而SpringBoot自动地配置Spring和其它有需要的第三方依赖, 绝对没有代码生成，无需 XML 配置。提供固定的启动器依赖去简化组件配置；实现开箱即用,，通过自己设置参数,，即可快速使用。 

###### **Spring Boot的核心配置文件**

- pring Boot 有两种类型的配置文件，application 和 bootstrap 文件
- Spring Boot会自动加载classpath目前下的这两个文件，文件格式为 properties 或 yml 格式
- bootstrap 配置文件是系统级别的，用来加载外部配置，如配置中心的配置信息，也可以用来定义系统不会变化的属性.bootstatp 文件的加载先于application文件
- application 配置文件是应用级别的，是当前应用的配置文件

###### **springBoot配置文件有哪几类?它们有什么区别?**

- springBoot配置文件格式为 properties 或 yml 格式
- properties 文件是 key=value 的形式,
- yml 是 key: value 的形式
- yml 加载的属性是有顺序的，但不支持 @PropertySource 注解来导入配置，一般推荐用yml文件，看下来更加形象

###### **SpringBoot实现热部署**

- springboot有3中热部署方式：

  1.使用springloaded配置pom.xml文件，使用mvn spring-boot:run启动

  2.使用springloaded本地加载启动，配置jvm参数

  3.使用DevTools工具包，操作简单，但是每次需要重新部署

###### **SpringCloud是什么?**

- springCloud是搭建微服务架构的有序框架集合,
- Spring cloud是一个基于Spring Boot实现的服务治理工具包，在微服务架构中用于管理和协调服务的

###### **Spring Cloud 的断路器（Hystrix）的作用是什么**

- 一定时间内 达到一定的次数无法调用 并且多次检测没有恢复的迹象 断路器完全打开，那么下次请求就不会请求到该服务 半开短时间内 有恢复迹象 断路器会将部分请求发给该服务 当能正常调用时 断路器关闭 ，当服务一直处于正常状态 能正常调用 断路器关闭索引
- 当对服务调用时，不可用的次数达到一个阀值时，断路器就会打开，通过回调方法迅速返回一个值结束调用，避免出现连锁故障。

###### **Dubbo是什麼?**

Dubbo是一款高性能的RPC框架，前身是阿里，之后由apache维护。 Dubbo提供了三大核心能力：面向接口的远程方法调用，智能容错和负载均衡，以及服务自动注 册和发现。

###### **作为服务注册中心，Eureka比Zookeeper好在哪里**

著名的CAP理论指出，一个分布式系统不可能同时满足C(一致性)、A(可用性)和P(分区容错性)。由于分区容错性在是分布式系统中必须要保证的，因此我们只能在A和C之间进行权衡。在此Zookeeper保证的是CP, 而Eureka则是AP。

###### SpringBoot 序列化器注解使用方法

- @JsonIgnoreProperties

  此注解是类注解，作用是json序列化时将Java bean中的一些属性忽略掉，序列化和反序列化都受影响

###### **Spring Cloud 的核心组件有哪些**

- *Eureka* 各个服务启动时，Eureka Client都会将服务注册到Eureka Server，并且Eureka Client还可以反过来从Eureka Server拉取注册表，从而知道其他服务在哪里
- *Ribbon* 服务间发起请求的时候，基于Ribbon做负载均衡，从一个服务的多台机器中选择一台
- *Fegin*   基于Feign的动态代理机制，根据注解和选择的机器，拼接请求URL地址，发起请求
- *Hystrix*  发起请求是通过Hystrix的线程池来走的，不同的服务走不同的线程池，实现了不同服务调用的隔离，避免了服务雪崩的问题
- *Gateway*(Zuul)  如果前端、移动端要调用后端系统，统一从Gateway(Zuul)网关进入，由Zuul网关转发请求给对应的服务

### Mybatis

###### **mybatis中#{}和${}的区别是什么？**

- #{}是预编译处理，${}是字符串替换。mybatis在处理#{}时，会将sql中的#{}替换为?号，调用PreparedStatement的set方法来赋值，最后注入进去是带引号的；mybatis在处理${}时，就是把${}替换成变量的值。使用#{}可以有效的防止SQL注入，提高系统安全性。

###### **mybatis逻辑分页和物理分页的区别？**

- 逻辑分页：将数据一次性从数据库查出到内存中，在内存中进行逻辑上的分页
- 物理分页：直接特定的SQL语句，只从数据库中查询出需要的数据

###### **mybatis是否支持延迟加载，延迟加载的原理是什么？**

-  延迟加载，也称为懒加载（LazyLoding）。

  当代码中执行到查询语句时，并不是直接到DB中执行select语句进行查询，而是根据设置好的延迟策略，将查询向后推迟。这就称为延迟加载

###### **mybatis的一级缓存和二级缓存**

- 一级缓存

  一级缓存是mybatis自带的缓存，mybatis每次在查询后，会将语句和参数相同的查询SQL的结果集存放进缓存，待下一次有相同的语句和参数时，mybatis直接将缓存内的结果集返回，而不再查询数据库。如果对于缓存的数据对应的表有增删改操作的话，缓存自动清空。

- 二级缓存

  相较于一级缓存的自动默认开启，二级缓存需要手动开启。一级缓存在同一个SqlSession内，以SqlSession为缓存单位；二级缓存在不同的SqlSession间，以mapper为单位，即不同的SqlSession间可以共享相同的mapper下接口查询的数据。

###### **mybatis和hibernate的区别**

- hibernate开发中，sql语句已经被封装，直接可以使用，加快系统开发；

- Mybatis 属于半自动化，sql需要手工完成，稍微繁琐；

- Hibernate 自动生成sql,有些语句较为繁琐，会多消耗一些性能；

- Mybatis 手动编写sql，可以避免不需要的查询，提高系统性能；

- Hibernate 是完整的对象-关系映射的框架，开发工程中，无需过多关注底层实现，只要去管理对象即可;

- Mybatis 需要自行管理 映射关系；

- Hibernate试图完全用面向对象的方法来访问数据库，最终将我们的代码转化成SQL到数据库里执行，返回结果用实体类或集合之类来接收；当然Hibernate也可以执行我们写的SQL语句，但返回结果需要程序员手动做一个转换，才能赋值到实体类或集合里。

- 而mybatis则需要我们在注解或配置里写好SQL，交给它来执行。返回结果也是用实体类或集合之类来接收。

  先给结论：**mybatis比hibernate要实在开发过程中，一般都会以在有可能出错的地方记录日志，比如修改数据，网络调用。这些地方一单出错会记录日志。。。那么在现实我们通过日志就可以很快速的定位到问题在哪里并确认原因进行修改用和灵活**。

###### **web服务器有哪些**

- Microsoft IIS
- IBM webSphere
- BEA webLogic
- IP lanet Application server
- Oracle IAS 
- Apache
- Tomcat
- Nginx

**mybatis都有哪些Executor执行器？**

-  SimpleExecutor
- ReuseExecutor
- BatchExecutor

###### **mybatis 分页插件的实现原理是什么?**

- pageHelper会使用ThreadLocal获取到同一线程中的变量信息，各个线程之间的Threadlocal不会相互干扰，也就是Thread 1中的ThreadLocal1之后获取到Tread1中的变量的信息，不会获取到Thread2中的信息
- 所以在多线程环境下，各个Threadlocal之间相互隔离，可以实现，不同thread使用不同的数据源或不同的Thread中执行不同的SQL语句
- 所以，PageHelper利用这一点通过拦截器获取到同一线程中的预编译好的SQL语句之后将SQL语句包装成具有分页功能的SQL语句，并将其再次赋值给下一步操作，所以实际执行的SQL语句就是有了分页功能的SQL语句

### **Mysql**

###### **如何获取当前数据库版本?**

- 打开mysql在命令提示符上输入  select version();
- 在cmd里面输入 mysql -V 来获取mysql版本号

###### **什么是ACID?**

- 原子性（Atomicity）
  原子性是指事务是一个不可分割的工作单位，事务中的操作要么都发生，要么都不发生。
- 一致性（Consistency）
  事务前后数据的完整性必须保持一致。
- 隔离性（Isolation）
  事务的隔离性是多个用户并发访问数据库时，数据库为每一个用户开启的事务，不能被其他事务的操作数据所干扰，多个并发事务之间要相互隔离。
- 持久性（Durability）
  持久性是指一个事务一旦被提交，它对数据库中数据的改变就是永久性的，接下来即使数据库发生故障也不应该对其有任何影响

###### **varchar与char有什么区别？**

- 定长和变长,char 表示定长，长度固定，varchar表示变长，即长度可变。char如果插入的长度小于定义长度时，则用空格填充；varchar小于定义长度时，还是按实际长度存储，插入多长就存多长。
- 存储的容量不同,对 char 来说，最多能存放的字符个数 255，和编码无关。
  而 varchar 呢，最多能存放 65532 个字符。varchar的最大有效长度由最大行大小和使用的字符集确定。整体最大长度是 65,532字节。

###### **float和double的区别**

- 　01.在内存中占有的字节数不同

    　　　　单精度浮点数在机内存占4个字节

    　　　　双精度浮点数在机内存占8个字节

    　02.有效数字位数不同

    　　　　单精度浮点数有效数字8位

    　　　　双精度浮点数有效数字16位

    　03.数值取值范围

    　　　　单精度浮点数的表示范围：-3.40E+38~3.40E+38

    　　　　双精度浮点数的表示范围：-1.79E+308~-1.79E+308

    　04.在程序中处理速度不同

    　　　　一般来说，CPU处理单精度浮点数的速度比处理双精度浮点数快

###### **数据库的三大范式**

- 所谓第一范式（1NF)所有的域都应该是原子性的，即数据库表的每一列都是不可分割的原子数据项，而不能是集合，数组，记录等非原子数据项。
- 第二范式（2NF)在1NF的基础上，非码属性必须完全依赖于候选码（在1NF基础上消除非主属性对主码的部分函数依赖
- 第三范式（3NF）在2NF基础上，任何非主属性不依赖于其它非主属性（在2NF基础上消除传递依赖）

###### **mysql的内连接,左连接,右连接右什么区别**

- 1.内连接只显示两表中有关联的数据
  - select * from 主表 inner join 关联表 on 主表.sid = 关联表.stu_id;
- 2.左连接显示左表所有数据，右表没有对应的数据用NULL补齐，多了的数据删除
  - select * from 主表left join  关联表 on 主表.sid =  关联表.stu_id;
- 3.右连接显示右表所有数据，左表没有对应的数据用NULL对齐，多了的数据删除
  - select * from 主表right join  关联表 on 主表.sid =  关联表.stu_id;

###### **Mysql的索引的实现原理**

- MySQL中,索引属于存储引擎级别的概念,不同存储引擎对索引的实现方式是不同的,本文主要讨论My ISAM和InnoDB两个存储引擎的索引实现方式。
- **MyISAM**索引实现MyISAM引擎使用B+Tree作为索引结构,叶节点的data域存放的是数据记录的地址,在 MyISAM 中,主索引和辅助索引(Secondary key)在结构上没有任何区别,只是主索引要求 key 是唯一的,而辅助索引的 key 可以重复。如果我们在 Col2 上建立一个辅助索引.
- **第一个重大区别是 InnoDB 的数据文件本身就是索引文件。从上文知道,MyISAM 索引文件和数据文件是分离的,索引文件仅保存数据记录的地址**。而在InnoDB 中,表数据文件本身就是按 B+Tree 组织的一个索引结构,这棵树的叶点data 域保存了完整的数据记录。这个索引的 key 是数据表的主键,因此 **InnoDB 表数据文件本身就是主索引**

###### **怎么验证mysql的索引是否满足需求**

- 需要根据查询需求来决定配置索引的类型，一旦确定索引类型之后，可以使用 explain 查看 SQL 执行计划，确认索引是否满足需求

###### **mysql查詢如何去重?**

- **group by** 是**分组查询** 关键字

  **distinct** 是去**重查询**关键字

###### 数据库的事务隔离

- 隔离性是当多个用户并发访问数据库时，比如操作同一张表时，数据库为每一个用户开启的事务，不能被其他事务的操作所干扰，多个并发事务之间要相互隔离。
- DEFAULT 这是一个PlatfromTransactionManager默认的隔离级别，使用数据库默认的事务隔离级别.
- 未提交读（read uncommited） :脏读，不可重复读，虚读都有可能发生
- 已提交读 （read commited）:避免脏读。但是不可重复读和虚读有可能发生
- 可重复读 （repeatable read） :避免脏读和不可重复读.但是虚读有可能发生.
- 串行化的 （serializable） :避免以上所有读问题.
  Mysql 默认:可重复读
  Oracle 默认:读已提交

###### **mysql的常用引擎**

- MyISAM存储引擎
- InnoDB存储引擎
- MEMORY存储引擎
- MERGE存储引擎

###### **mysql的行锁和表锁**

- 表锁:加锁的效率高，开销小，不需要考虑死锁的出现，锁定的粒度大从而会导致非常容易出现锁竞争，并发的性能低下
- 行锁:加锁的效率低，开销大，容易出现死锁，锁定的粒度小，不容易出现锁竞争，并行性能高

###### **mysql的悲观锁和乐观锁**

-  乐观锁：每次去拿数据的时候都认为别人不会修改，所以不会上锁，但是在提交更新的时候会判断一下在此期间别人有没有去更新这个数据。
-  悲观锁：每次去拿数据的时候都认为别人会修改，所以每次在拿数据的时候都会上锁，这样别人想拿这个数据就会阻止，直到这个锁被释放。

###### **什么是最左前缀匹配规则**

- 在mysql建立联合索引时会遵循最左前缀匹配的原则，即最左优先，在检索数据时从联合索引的最左边开始匹配
- 如果查询的时候查询条件精确匹配索引的左边连续一列或几列，则此列就可以被用到

###### **mysql的问题排查都有哪些手段?**

- 根据控制台打印的错误,找到错误的本身,如果没找到就执行以下操作

- 查询不是sleep或者有状态的sql
- 查询运行中的事务
- 查看死锁

###### **如何做mysql的性能优化?**

- 不要使用游标
- 创建适当的索引
- 小心死锁 
- 不要打开大的数据集 
- 使用事务 
- 不要使用服务器端游标
- 不要忽略同时修改同一记录的问题
- 避免在索引列上使用计算  
- 不同类型的索引效能是不一样的，应尽可能先使用效能高的

###### **sql语句的优化**

- 不要使用select * 
- 使用参数查询 (主要是防止SQL注入，提高安全性)
- 使用exists或not exists代替in或not in 
- 少用is null或is not null操作(null为索引)
- 少用<及>操作(改用为<=   , >=)
- 少用like(模糊查询)操作 
- where后面的条件顺序也会影响性能(where子句后面紧跟的条件顺序对大数据量表的查询会产生直接的影响)
- 用union替换or（适用于索引列）
- 优化group by (提高group by语句的效率，可以通过将不需要的记录在group by之前过滤掉。)
- 使用存储过程 
- 使用select top或set rowcount来限制操作的行。

###### **RESTful和web Service的区别**

- **RESTful 简化了 web service** 的设计，它不再需要 **wsdl** ，也**不再需要 soap 协议，而是通过最简单的 http 协议传输数据** ( 包括 xml 或 json) 。既简化了设计，也减少了网络传输量（因为只传输代表数据的 xml 或 json ，没有额外的 xml 包装）。

###### **OSIq七层模型**

- 应用层,表示层,會话层,传输层,网络层,数据链路层,物理层

###### **如何根據前端的url地址找到對應的應用層**

nginx反向代理+负载均衡+服务器宕机解决办法

### linux 

###### **linux 编辑文件**

- 打开文件 ： vim 文件名
- 进入编辑模式 ：按 insert 按键就可以编辑文件了
- Esc 退出编辑模式 再输入英文的冒号 :
- :wq 保存编辑的文件
- :q! 为不保存文件

###### linux如何查看進程

-  ps命令查找与进程相关的PID号：

  ​    ps a 显示现行终端机下的所有程序，包括其他用户的程序。 

  ​    ps -A 显示所有程序。 

  ​    ps c 列出程序时，显示每个程序真正的指令名称，而不包含路径，参数或常驻服务的标示。 

  ​    ps -e 此参数的效果和指定"A"参数相同。 

  ​    ps e 列出程序时，显示每个程序所使用的环境变量。 

  ​    ps f 用ASCII字符显示树状结构，表达程序间的相互关系。 

  ​    ps -H 显示树状结构，表示程序间的相互关系。 

  ​    ps -N 显示所有的程序，除了执行ps指令终端机下的程序之外。 

  ​    ps s 采用程序信号的格式显示程序状况。 

  ​    ps S 列出程序时，包括已中断的子程序资料。 

  ​    ps -t<终端机编号> 指定终端机编号，并列出属于该终端机的程序的状况。 

  ​    ps u 以用户为主的格式来显示程序状况。 

  ​    ps x 显示所有程序，不以终端机来区分。

### 通讯tcp/http/socket协议

######  Socket通讯方式说明


 　　与socket通讯有两种方式，一种是建立长连接，建立后不停的发送，接收；另一种是建立短连接，即建立连接发送报文，接收报文关闭连接

###### **WebSocket与HTTP的关系**

相同点

都是一样基于TCP的，都是可靠性传输协议。
都是应用层协议。

不同点

WebSocket是双向通信协议，模拟Socket协议，可以双向发送或接受信息。HTTP是单向的。
WebSocket是需要握手进行建立连接的。

139. rabbitmq 的消息是怎么发送的？

首先客户端必须连接到  RabbitMQ 服务器才能发布和消费消息，客户端和 rabbit server 之间会创建一个 tcp 连接，一旦 tcp  打开并通过了认证（认证就是你发送给 rabbit 服务器的用户名和密码），你的客户端和 RabbitMQ 就创建了一条 amqp  信道（channel），信道是创建在“真实” tcp 上的虚拟连接，amqp 命令都是通过信道发送出去的，每个信道都会有一个唯一的  id，不论是发布消息，订阅队列都是通过这个信道完成的。

###### **ElasticSearch的读与写**

写操作:

- 当提交了一个索引新文档的请求,节点会计算新文档应该加入到哪个分片（shard）中,协调节点会将请求发送给对应的节点.
- 这个请求会发送给主分片，等主分片完成索引，会并行将请求发送到其所有副本分片，保证每个分片都持有最新数据.
- 每次写入新文档时，都会先写入内存中，并将这一操作写入一个预写日志(translog)文件（transaction log）中.
- **ES会每隔1秒时间（这个时间可以修改）进行一次刷新操作（refresh），此时在这1秒时间内写入内存的新文档都会被写入一个文件系统缓存（filesystemcache）中，并构成一个分段（segment）。**此时这个segment里的文档可以被搜索到，但是尚未写入硬盘，即如果此时发生断电，则这些文档可能会丢失,所以ES引入了translog来记录两次fsync之间所有的操作，这样机器从故障中恢复或者重新启动，ES便可以根据translog进行还原。可以认为一个对文档的操作一旦写入磁盘便是安全的可以复原的，**因此只有在当前操作记录被写入磁盘，ES才会将操作成功的结果返回发送此操作请求的客户端。**
- **ES会自动启动合并segment的工作，将一部分相似大小的segment合并成一个新的大segment。合并的过程实际上是创建了一个新的segment，当新segment被写入磁盘，所有被合并的旧segment被清除**。
- **更新**:更新新文档会首先查找原文档，得到该文档的版本号。然后将修改后的文档写入内存，此过程与写入一个新文档相同。同时，旧版本文档被标记为删除，同理，该文档可以被搜索到，只是最终被过滤掉。
- **删除**:,每当提出删除请求时文档并没有被真正删除,而是在删除文档中标记该文档已被删除,只是在检索是过滤掉了被标记删除的文件,每次在启动segment合并工作时，那些被标记为删除的文档才会被真正删除。

读操作:

- **查询阶段**:**当一个节点接收到一个搜索请求**，则这个**节点就变成了协调节点**。**广播请求到索引中每一个节点的分片拷贝**.**每个分片将会在本地构建一个优先级队列**。**分片仅会返回一个轻量级**的**结果给协调节点**，**包含结果集中的每一个文档的ID和进行排序所需要的信息**.协调节点会将**所有分片**的**结果汇总**，并进行**全局排序**，得到**最终的查询排序结果**
- **取回阶段**:**查询过程**得到的是一个**排序结果**，**标记**出哪些**文档是符合搜索要求的**，此时仍然需要获取这些文档返回客户端。
- **协调节点会确定实际需要返回的文档**，并向**含有该文档的分片发送get请求**；**分片获取文档**返回给协**调节点**；**协调节点**将结果返回给**客户端**。

- 

###### **怎么通过日志查看定位线上问题**

- 在开发过程中，一般都会以在有可能出错的地方记录日志，比如修改数据，网络调用。这些地方一单出错会记录日志。。。那么在现实我们通过日志就可以很快速的定位到问题在哪里并确认原因进行修改

**myBatis级联查询**
**spring的事务怎么用**
**线程阻塞的原因?关键字是否影响线程阻塞**
**集合架构**
**线程安全的理解**
**hashMap hashtable ConcurrentHashMap区别**
**常用设计模式  工厂模式具体用途,简单工厂模式与抽象工厂模式区别**
**常用Linux命令  怎么通过日志查看定位线上问题**
**数据库 mysql做过哪些 redis 哪些应用场 怎么实现  
为什么用redis做缓存**

redis做缓存后对数据的访问压力减小多少           

  项目怎么部署上线   session共享怎么实现的

###### **RabbitMQ消息积压丢失问题**

- 先修复 consumer 的问题，确保其恢复消费速度，然后将现有 consumer 都停掉。
- 新建一个 topic，partition 是原来的 10 倍，临时建立好原先 10 倍的 queue 数量。
- 然后写一个临时的分发数据的 consumer 程序，这个程序部署上去消费积压的数据，消费之后不做耗时的处理，直接均匀轮询写入临时建立好的 10 倍数量的 queue。
- 接着临时征用 10 倍的机器来部署 consumer，每一批 consumer 消费一个临时 queue 的数据。这种做法相当于是临时将 queue 资源和 consumer 资源扩大 10 倍，以正常的 10 倍速度来消费数据。
- 等快速消费完积压数据之后，得恢复原先部署的架构，重新用原先的 consumer 机器来消费消息
  

###### **@Autowried与@resource的区别**

- **相同点**
  1. Spring都支持
  2. 都可以作用在字段和setter方法上
- **不同点**
  1. Resource是JDK提供的，而Autowired是Spring提供的
  2. Resource不允许找不到bean的情况，而Autowired允许（@Autowired(required = false)）
  3. 指定name的方式不一样，@Resource(name = "baseDao"),@Autowired()@Qualifier("baseDao")
  4. Resource默认通过name查找，而Autowired默认通过type查找

###### **Redis有哪几种数据类型**

- **字符串String**(缓存功能,计数器,共享session)
- **列表** (消息队列： redis的lpush+brpop命令组合即可实现阻塞队列，生产者客户端是用lupsh从列表左侧插入元素,多个消费者客户端使用brpop命令阻塞时的“抢”列表尾部的元素，多个客户端保证了消费的负载均衡 和高可用性)
- **集合 **(标签:如一个用户对娱乐、体育比较感兴趣，另一个可能对新闻感兴趣，这些兴趣就是标签，有了这些数据就可以得到同一标签的人，以及用户的共同爱好的标签, 这些数据对于用户体验以及曾强用户粘度比较重要。)
- **hash**(哈希结构相对于字符串序列化缓存信息更加直观，并且在更新操作上更加便捷。 所以常常用于**用户信息**等管理)
- **有序集合**(排行榜：有序集合经典使用场景。例如视频网站需要对用户上传的视频做排行榜，榜单维护可能是多方面：按照时间、按照播放量、按照获得的赞数等)

###### **Redis为什么是单线程?**

- CPU不是redis的瓶颈 
-  redis的瓶颈主要在内存大小和网络的快慢 
- redis的tps能达到百万级（这已经够快了）
- 1.完全基于内存的 
   2.采用单线程，避免不必要的上下文切换可竞争条件 
   3.数据简单，数据操作也相对简单 
   4.使用多路I/O复用模型，非阻塞IO

###### **java的几大特征**

- 封装:总而言之，就是隐藏类的属性和方法，对外提供公共的数据访问接口；
- 继承:采用继承的思想，可以使类与类之间层次化，提高代码的重用，是多态的前提
- 多态:指将不同类的对象对同一行为或者事件做出响应，提高了程序的可拓展性。可把多个子类视为父类的实例对象.多个子类的不同状态可视为多态.
- 抽象:抽象只对对象的行为和属性进行改变，不在乎方法的细节.

