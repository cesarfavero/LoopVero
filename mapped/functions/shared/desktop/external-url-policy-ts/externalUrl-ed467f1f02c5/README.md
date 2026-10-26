# `externalUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/desktop/external-url-policy.ts` · [README do módulo](../../../../../modules/shared/desktop/external-url-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:486744-486751](../../../../../../reference/runtime/host-main.cjs#L486744-L486751) | `FunctionDeclaration` | não | `value` |
| [evaluation:495055-495062](../../../../../../reference/runtime/sand-eval-runner.cjs#L495055-L495062) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486744-486751](../../../../../../reference/runtime/host-main.cjs#L486744-L486751) | 1 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:495055-495062](../../../../../../reference/runtime/sand-eval-runner.cjs#L495055-L495062) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:486744

Chamadas escritas diretamente neste corpo: `new URL`.

SHA-256 do trecho: `610155431144fb1f96fc134ad55948ed1248193f91b562ac6ac77948c4ff9131`.

### evaluation:495055

Chamadas escritas diretamente neste corpo: `new URL`.

SHA-256 do trecho: `610155431144fb1f96fc134ad55948ed1248193f91b562ac6ac77948c4ff9131`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
