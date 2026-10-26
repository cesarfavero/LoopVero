# `MeetingRepeatSpec.problemOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/meetings/meeting-repeat.ts` · [README do módulo](../../../../../modules/shared/meetings/meeting-repeat-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763267-763270](../../../../../../reference/runtime/host-main.cjs#L763267-L763270) | `method` | não | `repeat` |
| [evaluation:556232-556235](../../../../../../reference/runtime/sand-eval-runner.cjs#L556232-L556235) | `method` | não | `repeat` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763267-763270](../../../../../../reference/runtime/host-main.cjs#L763267-L763270) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556232-556235](../../../../../../reference/runtime/sand-eval-runner.cjs#L556232-L556235) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:763267

Chamadas escritas diretamente neste corpo: `schema2.safeParse`.

SHA-256 do trecho: `82aff4389deb5230450ad6d57ecae0376f1ae58c3181c66f61f132612eabc635`.

### evaluation:556232

Chamadas escritas diretamente neste corpo: `schema.safeParse`.

SHA-256 do trecho: `2d8e3eb922eab69de1286f3099dd200532394d47d6634922d9cf1de37654695c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
