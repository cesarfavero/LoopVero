# `startAgentIdentity/downloadTemplateRecipe`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496652-496675](../../../../../../../reference/runtime/host-main.cjs#L496652-L496675) | `ArrowFunctionExpression` | sim | `blobGetUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496652-496675](../../../../../../../reference/runtime/host-main.cjs#L496652-L496675) | 5 | 0 | 2 | 1 | 5 | 0 |

### host:496652

Chamadas escritas diretamente neste corpo: `.encode`, `JSON.parse`, `Number`, `Number.isFinite`, `botTemplateSchema.safeParse`, `new TemplateRecipeReadError`, `new TextEncoder`, `response.headers.get`, `response.text`, `templateRecipeDeadline.run`.

Alvos de lançamento explícito: `TemplateRecipeReadError`.

SHA-256 do trecho: `9d0e53b9b370e65d3e3201f97c45f621938bace9521800c1c3006e7d32731c52`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
