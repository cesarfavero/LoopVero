# `isDriverCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/secure-fill-write-failure.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/secure-fill-write-failure-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724152-724154](../../../../../../../../reference/runtime/host-main.cjs#L724152-L724154) | `FunctionDeclaration` | não | `call` |
| [evaluation:560046-560048](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560046-L560048) | `FunctionDeclaration` | não | `call` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724152-724154](../../../../../../../../reference/runtime/host-main.cjs#L724152-L724154) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560046-560048](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560046-L560048) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724152

Chamadas escritas diretamente neste corpo: `DRIVER_CALLS.has`.

SHA-256 do trecho: `1682d1c32ed9b5483a782e0cd3edd7ed73354d9a10cb18b5baf09c535fe84c38`.

### evaluation:560046

Chamadas escritas diretamente neste corpo: `DRIVER_CALLS.has`.

SHA-256 do trecho: `1682d1c32ed9b5483a782e0cd3edd7ed73354d9a10cb18b5baf09c535fe84c38`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
