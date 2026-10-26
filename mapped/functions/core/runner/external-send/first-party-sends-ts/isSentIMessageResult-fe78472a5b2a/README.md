# `isSentIMessageResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/external-send/first-party-sends.ts` · [README do módulo](../../../../../../modules/core/runner/external-send/first-party-sends-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:538941-538947](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538941-L538947) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538941-538947](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538941-L538947) | 0 | 0 | 0 | 2 | 0 | 1 |

### evaluation:538941

Chamadas escritas diretamente neste corpo: `JSON.parse`, `sentIMessageResultSchema.safeParse`.

SHA-256 do trecho: `c0d5dd2f5f799e3e4fb5bb748de50a42551dbdcff5ef52f0e97a052ec6925f2b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
