# `liveSkillSpecFromSource`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `shared/skills/skill-model.ts` · [README do módulo](../../../../../modules/shared/skills/skill-model-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683122-683133](../../../../../../reference/runtime/host-main.cjs#L683122-L683133) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683122-683133](../../../../../../reference/runtime/host-main.cjs#L683122-L683133) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:683122

Chamadas escritas diretamente neste corpo: `args.source.trim`, `buildLiveSourceDescription`, `buildLiveSourcePointerBody`, `clampSkillBody`, `clampSkillDescription`, `clampSkillName`.

SHA-256 do trecho: `24d8e187c72a283db8d79e989f258a66623476976021e1c35bf09ca3f3f6de8f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
