# `readOpenSandDataFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453762-453769](../../../../../reference/runtime/host-main.cjs#L453762-L453769) | `FunctionDeclaration` | não | `fd, path33, options2` |
| [evaluation:627504-627511](../../../../../reference/runtime/sand-eval-runner.cjs#L627504-L627511) | `FunctionDeclaration` | não | `fd, path33, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453762-453769](../../../../../reference/runtime/host-main.cjs#L453762-L453769) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:627504-627511](../../../../../reference/runtime/sand-eval-runner.cjs#L627504-L627511) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:453762

Chamadas escritas diretamente neste corpo: `readCappedSync`.

SHA-256 do trecho: `0fadd862cbd0d7942f06cb5970aba792edd0fa8d77e493cd473f34e9bba8a14c`.

### evaluation:627504

Chamadas escritas diretamente neste corpo: `readCappedSync`.

SHA-256 do trecho: `08f610df92f2ea9f712bcc938e1214c0eed76a4c1879e064e264a339e0e11079`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
