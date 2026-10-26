# `clampSkillBody`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `shared/skills/skill-model.ts` · [README do módulo](../../../../../modules/shared/skills/skill-model-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682992-682994](../../../../../../reference/runtime/host-main.cjs#L682992-L682994) | `FunctionDeclaration` | não | `body` |
| [evaluation:534104-534106](../../../../../../reference/runtime/sand-eval-runner.cjs#L534104-L534106) | `FunctionDeclaration` | não | `body` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682992-682994](../../../../../../reference/runtime/host-main.cjs#L682992-L682994) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:534104-534106](../../../../../../reference/runtime/sand-eval-runner.cjs#L534104-L534106) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682992

Chamadas escritas diretamente neste corpo: `clampBlock`.

SHA-256 do trecho: `1c9b2c4344d1171e58439c20d161b0108f98e27eb39dc816ba4e7fcd898147ca`.

### evaluation:534104

Chamadas escritas diretamente neste corpo: `clampBlock`.

SHA-256 do trecho: `1c9b2c4344d1171e58439c20d161b0108f98e27eb39dc816ba4e7fcd898147ca`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
