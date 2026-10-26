# `toCodebase`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/codebase-telemetry/codebase-telemetry-adapter.ts` · [README do módulo](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-adapter-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:540784-540798](../../../../../../../reference/runtime/host-main.cjs#L540784-L540798) | `FunctionDeclaration` | não | `authId, codebase` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:540784-540798](../../../../../../../reference/runtime/host-main.cjs#L540784-L540798) | 2 | 0 | 0 | 1 | 2 | 0 |

### host:540784

Chamadas escritas diretamente neste corpo: `isCodebaseEnvironment`, `isCodebaseKind`, `new CsnapsAdapterError`.

Alvos de lançamento explícito: `CsnapsAdapterError`.

SHA-256 do trecho: `434d5c09dd906dd70f9ad2575673ece375e7082aad84f235feb8569bf55b78a6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
