# `isSandHostProcess`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/host-process-probe.ts` · [README do módulo](../../../../../modules/shared/node/host-process-probe-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494198-494201](../../../../../../reference/runtime/host-main.cjs#L494198-L494201) | `FunctionDeclaration` | não | `pid` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494198-494201](../../../../../../reference/runtime/host-main.cjs#L494198-L494201) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494198

Chamadas escritas diretamente neste corpo: `command.includes`, `readProcessCommand`.

SHA-256 do trecho: `2fe8d6332e3a358d7bb31ba1ee24d147404921135dd891c6563335d3941e82a6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
