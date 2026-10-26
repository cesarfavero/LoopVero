# `removeSkillLiveReferences`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `host/extensions/mcp/legacy-live-references.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/legacy-live-references-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684759-684770](../../../../../../../reference/runtime/host-main.cjs#L684759-L684770) | `FunctionDeclaration` | não | `sandRootDir, sourceUrls` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684759-684770](../../../../../../../reference/runtime/host-main.cjs#L684759-L684770) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:684759

Chamadas escritas diretamente neste corpo: `getGlobalSkillsDir`, `isLiveReferencePointerBody`, `library.list`, `library.remove`, `new GlobalSkillLibrary`, `new Set`, `normalizePluginSkillSourceUrl`, `refs.has`, `sourceUrls.map`.

Alvos de atribuição ou incremento: `removed`.

SHA-256 do trecho: `d0e0c7fa7aa1331dc8193466fe5f8b64465da37f3b5e486c0638377139ed7986`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
