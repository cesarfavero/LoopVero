# `structFromRecord`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/struct-from-record.ts` · [README do módulo](../../../../../modules/core/runner/struct-from-record-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699137-699139](../../../../../../reference/runtime/host-main.cjs#L699137-L699139) | `FunctionDeclaration` | não | `record3` |
| [evaluation:512968-512970](../../../../../../reference/runtime/sand-eval-runner.cjs#L512968-L512970) | `FunctionDeclaration` | não | `record4` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699137-699139](../../../../../../reference/runtime/host-main.cjs#L699137-L699139) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:512968-512970](../../../../../../reference/runtime/sand-eval-runner.cjs#L512968-L512970) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:699137

Chamadas escritas diretamente neste corpo: `Struct.fromJson`, `jsonObjectFrom`.

SHA-256 do trecho: `6edcc9f34bb305146ee0de54e2e4aa42ee2db704ae41e1f8f40a3013be24969e`.

### evaluation:512968

Chamadas escritas diretamente neste corpo: `Struct.fromJson`, `jsonObjectFrom`.

SHA-256 do trecho: `e974dbd58ca2e6e394100da626896dbe7e8975aa189c52be33449ab5881bab38`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
