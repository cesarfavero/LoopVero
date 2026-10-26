# `FrozenPromptToolsMiddleware.logAdjustments`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/frozen-prompts/frozen-prompt-tools.ts` · [README do módulo](../../../../../modules/core/frozen-prompts/frozen-prompt-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586267-586279](../../../../../../reference/runtime/sand-eval-runner.cjs#L586267-L586279) | `method` | não | `ctx, tool, adjustments` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586267-586279](../../../../../../reference/runtime/sand-eval-runner.cjs#L586267-L586279) | 1 | 1 | 0 | 0 | 0 | 0 |

### evaluation:586267

Chamadas escritas diretamente neste corpo: `logger99.info`, `this.logged.add`, `this.logged.has`.

SHA-256 do trecho: `14bcd94a258f0acf64686d45110bf8c76b815afab1744c7d3718d6012779d97b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
