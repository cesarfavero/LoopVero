# `start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/feedback/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/feedback/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:553680-553709](../../../../../../../reference/runtime/host-main.cjs#L553680-L553709) | `ArrowFunctionExpression` | não | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553680-553709](../../../../../../../reference/runtime/host-main.cjs#L553680-L553709) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:553680

Chamadas escritas diretamente neste corpo: `createSandFeedbackReporter`, `new SandFeedbackService`.

SHA-256 do trecho: `ad71fa8b29e2b834fa756cbeff42c6f495d686efb1f8f01e87f1aca81f5a5e02`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
