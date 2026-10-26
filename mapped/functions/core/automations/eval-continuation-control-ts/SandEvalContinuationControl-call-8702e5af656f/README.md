# `SandEvalContinuationControl.call`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/eval-continuation-control.ts` · [README do módulo](../../../../../modules/core/automations/eval-continuation-control-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628610-628629](../../../../../../reference/runtime/sand-eval-runner.cjs#L628610-L628629) | `method` | sim | `path33, body` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628610-628629](../../../../../../reference/runtime/sand-eval-runner.cjs#L628610-L628629) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:628610

Chamadas escritas diretamente neste corpo: `continuationControlDeadline.run`.

SHA-256 do trecho: `f4ccf1caa180970cc2eec77ce2145b673e8842e880fb90a005f5e65056d3c33f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
