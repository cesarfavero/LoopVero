# `listChatValuesOnly`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/vault-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/vault-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768016-768022](../../../../../../../../reference/runtime/host-main.cjs#L768016-L768022) | `FunctionDeclaration` | sim | `deps` |
| [evaluation:563532-563538](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563532-L563538) | `FunctionDeclaration` | sim | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768016-768022](../../../../../../../../reference/runtime/host-main.cjs#L768016-L768022) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:563532-563538](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563532-L563538) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:768016

Chamadas escritas diretamente neste corpo: `.join`, `chatValueNames`, `chatValuesBlock`, `notAvailable`.

SHA-256 do trecho: `f71b77a6ccb46a3a98e8e255a0732fc6602a04a9898671d0b4ebf15203fc25ba`.

### evaluation:563532

Chamadas escritas diretamente neste corpo: `.join`, `chatValueNames`, `chatValuesBlock`, `notAvailable`.

SHA-256 do trecho: `f71b77a6ccb46a3a98e8e255a0732fc6602a04a9898671d0b4ebf15203fc25ba`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
