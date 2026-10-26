# `readTrigger`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `shared/skills/skill-model.ts` · [README do módulo](../../../../../modules/shared/skills/skill-model-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683017-683026](../../../../../../reference/runtime/host-main.cjs#L683017-L683026) | `FunctionDeclaration` | não | `data2` |
| [evaluation:534129-534138](../../../../../../reference/runtime/sand-eval-runner.cjs#L534129-L534138) | `FunctionDeclaration` | não | `data2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683017-683026](../../../../../../reference/runtime/host-main.cjs#L683017-L683026) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:534129-534138](../../../../../../reference/runtime/sand-eval-runner.cjs#L534129-L534138) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:683017

Chamadas escritas diretamente neste corpo: `isUnknownRecord2`, `normalizeSchedule`.

SHA-256 do trecho: `db8ca533b9b29f32e82d6bf7396686514d0103b2a4191da53473eb760c2d3a63`.

### evaluation:534129

Chamadas escritas diretamente neste corpo: `isUnknownRecord2`, `normalizeSchedule`.

SHA-256 do trecho: `49119e8221904e64833f60af707eaea048976d05d438877287d55161ff6d1d54`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
