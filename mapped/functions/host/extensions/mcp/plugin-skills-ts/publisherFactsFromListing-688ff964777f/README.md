# `publisherFactsFromListing`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/mcp/plugin-skills.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/plugin-skills-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701758-701771](../../../../../../../reference/runtime/host-main.cjs#L701758-L701771) | `FunctionDeclaration` | não | `response` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701758-701771](../../../../../../../reference/runtime/host-main.cjs#L701758-L701771) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:701758

Chamadas escritas diretamente neste corpo: `byPluginId.set`, `new Map`, `plugin.id.toString`.

SHA-256 do trecho: `97b501fae0458fbdfae5f3e5596ae3e4f18cc44ed9e2f7e832651ced4415d289`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
