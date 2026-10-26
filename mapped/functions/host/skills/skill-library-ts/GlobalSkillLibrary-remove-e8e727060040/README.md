# `GlobalSkillLibrary.remove`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `host/skills/skill-library.ts` · [README do módulo](../../../../../modules/host/skills/skill-library-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684726-684738](../../../../../../reference/runtime/host-main.cjs#L684726-L684738) | `method` | não | `id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684726-684738](../../../../../../reference/runtime/host-main.cjs#L684726-L684738) | 2 | 0 | 0 | 4 | 0 | 1 |

### host:684726

Chamadas escritas diretamente neste corpo: `.isDirectory`, `isSafeFolderId`, `removeSandDataTreeSync`, `reportFallbackUnlessAbsent`, `this.dir.scheduleNotify`, `this.folder`.

SHA-256 do trecho: `7bc1720342fd8bb6d9de49e07267d91ae773f6e0c1a0a0de8482a6812ed0f2d0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
