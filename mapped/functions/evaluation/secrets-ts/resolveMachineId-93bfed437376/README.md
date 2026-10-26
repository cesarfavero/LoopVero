# `resolveMachineId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/secrets.ts` · [README do módulo](../../../../modules/evaluation/secrets-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:630678-630682](../../../../../reference/runtime/sand-eval-runner.cjs#L630678-L630682) | `FunctionDeclaration` | não | `envMachineId, machineFromFile` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630678-630682](../../../../../reference/runtime/sand-eval-runner.cjs#L630678-L630682) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:630678

Chamadas escritas diretamente neste corpo: `randomOpaqueId`.

SHA-256 do trecho: `73e8082be78047e975917f96dd37e395bbce918ebb7aa55ef2116e9949db4d4e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
