#1. ��������Ŀ����Ŀ¼���У�npm init -y  ���ٳ�ʼ����Ŀ

    ���������Զ�����һ��webpack.json �ļ����Ժ����еİ�װ���ļ�¼�������������

#2. ����Ŀ��Ŀ¼���� `src` �� `dist` �Ĳ�Ʒ������Ŀ¼

#3. ��src�д��� index.html(��ҳ) �� main.js(webpack���������ļ�)

#4. ��װwebpack  npm i webpack -D  //   npm i webpack-cli -D

#5. ����������ö���

#6. ��main.js��Ϊindex.js (�������ļ�)

#7. �������ļ��� dist => mian.js

#8. cnpm i html-webpack-plugin -D  �����ǽ�ҳ�����ɵ��ڴ���ȥ
-----------------------------------------------------------------------------------------

����Ŀ��ʹ��react 

#1. ��װ�� cnpm i react react-dom -s 
	
	react: ר�����ڴ������������DOM��,ͬʱ������������ڶ����������
	react: ר�Ž���DOM�����ģ�����Ҫ��Ӧ�ó���������ReactDOM.render()

#2. ��js�в���дhtml���룬��װ `babel` ��ת�� ��Щjs �еı�ǩ  ��jsx�﷨��

	cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
	cnpm i babel-preset-env babel-preset-stage-0 -D

#3. ��װ�ܹ�ʶ��ת��jsx�﷨�İ� babel-preset-react
	
	���� cnpm i babel-preset-react -D


#4. �½�  `.babelrc1` �ļ�����������ĵ�����ģ����н��� 

	���С�presets�� �����﷨
	���С�plugins�� ������  

#5. resolve: {
        extensions: ['.js', '.jsx', '.json'] //��ʾ���⼸���ļ��ĺ�׺��������ʡ�Բ�д
    }