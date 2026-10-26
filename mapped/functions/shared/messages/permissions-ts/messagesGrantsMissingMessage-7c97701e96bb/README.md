# `messagesGrantsMissingMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/messages/permissions.ts` · [README do módulo](../../../../../modules/shared/messages/permissions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:487347-487350](../../../../../../reference/runtime/host-main.cjs#L487347-L487350) | `FunctionDeclaration` | não | `grants` |
| [evaluation:577557-577560](../../../../../../reference/runtime/sand-eval-runner.cjs#L577557-L577560) | `FunctionDeclaration` | não | `grants` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487347-487350](../../../../../../reference/runtime/host-main.cjs#L487347-L487350) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577557-577560](../../../../../../reference/runtime/sand-eval-runner.cjs#L577557-L577560) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:487347

Chamadas escritas diretamente neste corpo: `listMessagesGrantNames`.

SHA-256 do trecho: `216b210965237b1b7e258afeb29ed6b73a21476e27aaeb7affaac9a0bb673554`.

### evaluation:577557

Chamadas escritas diretamente neste corpo: `listMessagesGrantNames`.

SHA-256 do trecho: `216b210965237b1b7e258afeb29ed6b73a21476e27aaeb7affaac9a0bb673554`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
