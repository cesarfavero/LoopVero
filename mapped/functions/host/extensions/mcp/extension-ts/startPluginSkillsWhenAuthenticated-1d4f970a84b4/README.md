# `startPluginSkillsWhenAuthenticated`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `host/extensions/mcp/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702388-702423](../../../../../../../reference/runtime/host-main.cjs#L702388-L702423) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702388-702423](../../../../../../../reference/runtime/host-main.cjs#L702388-L702423) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:702388

Chamadas escritas diretamente neste corpo: `options2.auth.peekAccessToken`, `options2.auth.subscribeToRenewal`, `start`.

SHA-256 do trecho: `3d016b44b4c8fa74c7cf39fdbd41275d41354dfa0feaf991afe29852529e2400`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
