# `normalizePluginSkillSourceUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `host/extensions/mcp/legacy-live-references.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/legacy-live-references-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684745-684758](../../../../../../../reference/runtime/host-main.cjs#L684745-L684758) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684745-684758](../../../../../../../reference/runtime/host-main.cjs#L684745-L684758) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:684745

Chamadas escritas diretamente neste corpo: `.filter`, `new URL`, `parsed2.hostname.toLowerCase`, `parsed2.pathname.split`, `path33.join`.

Alvos de atribuição ou incremento: `parsed2`.

SHA-256 do trecho: `98aa8958cb83a3dec67ec0f2170e816126d046ea58d78de4752e782310f4b14b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
