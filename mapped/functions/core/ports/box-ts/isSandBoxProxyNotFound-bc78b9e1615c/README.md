# `isSandBoxProxyNotFound`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/ports/box.ts` · [README do módulo](../../../../../modules/core/ports/box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:475743-475746](../../../../../../reference/runtime/sand-eval-runner.cjs#L475743-L475746) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:475743-475746](../../../../../../reference/runtime/sand-eval-runner.cjs#L475743-L475746) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:475743

Chamadas escritas diretamente neste corpo: `ConnectError.from`, `connectError.metadata.get`.

SHA-256 do trecho: `40ad40390c8ed6797c619e174b2104c76247c7db54fcfc0daab02ad5f5f13c1f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
