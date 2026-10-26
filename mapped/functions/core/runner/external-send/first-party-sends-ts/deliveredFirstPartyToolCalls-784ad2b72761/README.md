# `deliveredFirstPartyToolCalls`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/external-send/first-party-sends.ts` · [README do módulo](../../../../../../modules/core/runner/external-send/first-party-sends-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:538980-539021](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538980-L539021) | `FunctionDeclaration` | não | `messages, {   toolNames,   skipToolCallIds }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538980-539021](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538980-L539021) | 8 | 4 | 0 | 3 | 0 | 0 |

### evaluation:538980

Chamadas escritas diretamente neste corpo: `FIRST_PARTY_SEND_SPECS.get`, `candidates.filter`, `candidates.map`, `candidates.push`, `new Map`, `new Set`, `skipToolCallIds.has`, `spec.wentOut`, `toolMessageErrorSchema.safeParse`, `toolNameById.get`, `toolNames.has`, `toolResultPartSchema2.safeParse`, `toolResultText2`, `wentOut.add`.

SHA-256 do trecho: `7f1c94facb839df4ce8de4057f5feca55b380a0757491f5b97ae0b72865ae642`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
