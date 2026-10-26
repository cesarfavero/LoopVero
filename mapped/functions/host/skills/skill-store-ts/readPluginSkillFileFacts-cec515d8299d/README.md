# `readPluginSkillFileFacts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `host/skills/skill-store.ts` · [README do módulo](../../../../../modules/host/skills/skill-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720837-720865](../../../../../../reference/runtime/host-main.cjs#L720837-L720865) | `FunctionDeclaration` | não | `pluginsRoot, filePath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720837-720865](../../../../../../reference/runtime/host-main.cjs#L720837-L720865) | 1 | 0 | 0 | 3 | 0 | 2 |

### host:720837

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `.sort`, `parseSkillFile`, `readFileWithinSync`, `reportFallbackUnlessAbsent`, `resolveWithinSync`.

Alvos de atribuição ou incremento: `helperScripts`, `raw`, `skillDir`.

SHA-256 do trecho: `e6cc69d38dbee882aa3ad8b5f973c3d2790c5f11609f7409546c4e7934e5a3e3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
