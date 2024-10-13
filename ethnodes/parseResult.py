# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.


def calculate_total_latency_and_records(file_path):
    total_latency = 0
    total_records = 0
    try:
        with open(file_path, 'r') as file:
            for line in file:
                # 使用正则表达式匹配行中的数字
                import re
                matches = re.findall(r'\d+\.\d+|\d+', line)
                if len(matches) >= 3:
                    records = int(matches[0])
                    latency = float(matches[2])
                    # print(records, latency)
                    total_latency += records * latency
                    total_records += records
    except FileNotFoundError:
        print(f"文件 {file_path} 未找到。")
    except Exception as e:
        print(f"读取文件时发生错误：{e}")

    return total_latency, total_records

def calculate_total_throughput(file_path):
    total_tps = 0
    try:
        with open(file_path, 'r') as file:
            for line in file:
                # 使用正则表达式匹配行中的数字
                import re
                matches = re.findall(r'\d+', line)
                if len(matches) >= 4:
                    tps = int(matches[3])
                    # print(tps)
                    total_tps += tps
    except FileNotFoundError:
        print(f"文件 {file_path} 未找到。")
    except Exception as e:
        print(f"读取文件时发生错误：{e}")

    return total_tps


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    file_path = r"C:\Users\13219\Desktop\存储\实验\实验结果-1013\result\mestResult"
    total_latency, total_records = calculate_total_latency_and_records(file_path)
    print(f"总延迟乘积为：{total_latency}")
    print(f"总记录数为：{total_records}")
    tps_file_path = r"C:\Users\13219\Desktop\存储\实验\实验结果-1013\result\throughput.txt"
    total_tps = calculate_total_throughput(tps_file_path)
    print(f"总时长为：{total_tps}")
# See PyCharm help at https://www.jetbrains.com/help/pycharm/
