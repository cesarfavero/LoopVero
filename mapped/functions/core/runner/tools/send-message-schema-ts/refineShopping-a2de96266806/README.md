# `refineShopping`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-schema.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:741514-741529](../../../../../../../reference/runtime/host-main.cjs#L741514-L741529) | `FunctionDeclaration` | não | `value, ctx` |
| [evaluation:482461-482476](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482461-L482476) | `FunctionDeclaration` | não | `value, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741514-741529](../../../../../../../reference/runtime/host-main.cjs#L741514-L741529) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:482461-482476](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482461-L482476) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:741514

Chamadas escritas diretamente neste corpo: `ctx.addIssue`, `isFieldProvided`.

SHA-256 do trecho: `fa21bd480f3123f46e0993977314cfda004f3907e1384521babc5a2e104eabb2`.

### evaluation:482461

Chamadas escritas diretamente neste corpo: `ctx.addIssue`, `isFieldProvided`.

SHA-256 do trecho: `746da47bcbf15969bead3db148d01271e4cbd09c89edb5ae185ad36a07e52dff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
