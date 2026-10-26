# `withServerHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/external-send/tool-calls.ts` · [README do módulo](../../../../../../modules/core/runner/external-send/tool-calls-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:539084-539088](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539084-L539088) | `FunctionDeclaration` | não | `calls` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:539084-539088](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539084-L539088) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:539084

Chamadas escritas diretamente neste corpo: `calls.flatMap`.

SHA-256 do trecho: `3758c842f7c218a8a89b0d279d58230a3a7f3d93069c0c5ed806b8502814f7a4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
