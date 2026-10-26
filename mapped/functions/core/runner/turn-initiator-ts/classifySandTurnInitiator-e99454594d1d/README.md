# `classifySandTurnInitiator`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-initiator.ts` · [README do módulo](../../../../../modules/core/runner/turn-initiator-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:739600-739611](../../../../../../reference/runtime/host-main.cjs#L739600-L739611) | `FunctionDeclaration` | não | `options2` |
| [evaluation:590524-590535](../../../../../../reference/runtime/sand-eval-runner.cjs#L590524-L590535) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739600-739611](../../../../../../reference/runtime/host-main.cjs#L739600-L739611) | 5 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:590524-590535](../../../../../../reference/runtime/sand-eval-runner.cjs#L590524-L590535) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:739600

Chamadas escritas diretamente neste corpo: `USER_INITIATED_REQUEST_SOURCES.has`.

SHA-256 do trecho: `fecbd3f62a2644d42ca41b4a04479dedcbcb3f4dbaba7001bd2c47b406e4ed20`.

### evaluation:590524

Chamadas escritas diretamente neste corpo: `USER_INITIATED_REQUEST_SOURCES.has`.

SHA-256 do trecho: `fecbd3f62a2644d42ca41b4a04479dedcbcb3f4dbaba7001bd2c47b406e4ed20`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
