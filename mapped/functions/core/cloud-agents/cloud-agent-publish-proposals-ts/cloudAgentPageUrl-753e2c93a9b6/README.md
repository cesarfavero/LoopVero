# `cloudAgentPageUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-publish-proposals.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-publish-proposals-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:490315-490321](../../../../../../reference/runtime/sand-eval-runner.cjs#L490315-L490321) | `FunctionDeclaration` | não | `bcId, readPortalBaseUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490315-490321](../../../../../../reference/runtime/sand-eval-runner.cjs#L490315-L490321) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:490315

Chamadas escritas diretamente neste corpo: `encodeURIComponent`, `resolvePortalBaseUrl`.

SHA-256 do trecho: `e93f8b9f2cbbb7f823438df747221fc0eec30ce8733b3ccbdd47feef5d2c6fad`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
