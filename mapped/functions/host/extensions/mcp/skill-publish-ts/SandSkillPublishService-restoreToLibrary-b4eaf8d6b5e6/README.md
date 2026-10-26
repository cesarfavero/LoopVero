# `SandSkillPublishService.restoreToLibrary`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/mcp/skill-publish.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702235-702246](../../../../../../../reference/runtime/host-main.cjs#L702235-L702246) | `method` | sim | `record3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702235-702246](../../../../../../../reference/runtime/host-main.cjs#L702235-L702246) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:702235

Chamadas escritas diretamente neste corpo: `getGlobalSkillsDir`, `restoreSkillsFromPluginDir`, `this.library.get`.

SHA-256 do trecho: `e4beb2041fa2b081e3e3bef12dd5a8398d67d48cf92802cce853a4deac49c877`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
