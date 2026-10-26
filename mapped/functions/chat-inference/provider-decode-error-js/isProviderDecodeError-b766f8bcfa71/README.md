# `isProviderDecodeError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/provider-decode-error.js` · [README do módulo](../../../../modules/chat-inference/provider-decode-error-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:618035-618047](../../../../../reference/runtime/host-main.cjs#L618035-L618047) | `FunctionDeclaration` | não | `error64` |
| [evaluation:287406-287418](../../../../../reference/runtime/sand-eval-runner.cjs#L287406-L287418) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:618035-618047](../../../../../reference/runtime/host-main.cjs#L618035-L618047) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:287406-287418](../../../../../reference/runtime/sand-eval-runner.cjs#L287406-L287418) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:618035

Chamadas escritas diretamente neste corpo: `carrier.metadata.get`, `new Set`, `seen.add`, `seen.has`.

Alvos de atribuição ou incremento: `current2`.

SHA-256 do trecho: `36082f6ce54346297ac53d79cf894339738a02fbcc362aa59f020f98edc89334`.

### evaluation:287406

Chamadas escritas diretamente neste corpo: `carrier.metadata.get`, `new Set`, `seen.add`, `seen.has`.

Alvos de atribuição ou incremento: `current2`.

SHA-256 do trecho: `e8bf97cc09b81cc8c9e101be7dba6e6b7f5825723fe63ce6011f974cb0a42902`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
