#include<iostream>
#include<vector>
using namespace std;
 
int main()
{
    vector<int> lets;
    lets.push_back(10);
    lets.push_back(20);
    lets.push_back(30);
    lets.push_back(40);

    lets.pop_back();

    for(int i = 0; i<lets.size(); i++){
        cout<<lets[i]<<endl;
    }
}