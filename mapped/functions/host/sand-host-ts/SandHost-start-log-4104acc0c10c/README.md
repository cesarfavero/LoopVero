# `SandHost.start/log`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-host.ts` · [README do módulo](../../../../modules/host/sand-host-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786445-786445](../../../../../reference/runtime/host-main.cjs#L786445-L786445) | `ArrowFunctionExpression` | não | `message, level = "info"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786445-786445](../../../../../reference/runtime/host-main.cjs#L786445-L786445) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:786445 usa retorno implícito de arrow function.

### host:786445

Chamadas escritas diretamente neste corpo: `processOutput.print`.

SHA-256 do trecho: `ee04cd06b0e0b3a58165630ab53f783a56330081ebcfe49f7929921e838dcce0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
