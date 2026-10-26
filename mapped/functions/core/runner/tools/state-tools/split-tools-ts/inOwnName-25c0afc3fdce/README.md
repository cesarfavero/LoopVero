# `inOwnName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/split-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771710-771712](../../../../../../../../reference/runtime/host-main.cjs#L771710-L771712) | `FunctionDeclaration` | não | `toolName, result` |
| [evaluation:570943-570945](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570943-L570945) | `FunctionDeclaration` | não | `toolName, result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771710-771712](../../../../../../../../reference/runtime/host-main.cjs#L771710-L771712) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570943-570945](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570943-L570945) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:771710

Chamadas escritas diretamente neste corpo: `result.replaceAll`.

SHA-256 do trecho: `5d89de0abc01a5d9fcc7cb137a9cf6b2f1bef70950e671b42660ecdc44bf6a40`.

### evaluation:570943

Chamadas escritas diretamente neste corpo: `result.replaceAll`.

SHA-256 do trecho: `5d89de0abc01a5d9fcc7cb137a9cf6b2f1bef70950e671b42660ecdc44bf6a40`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
