# `_SandAgentRunner.probeNavigationAfterComputerUse`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-agent-runner.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-runner-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:594022-594024](../../../../../../reference/runtime/sand-eval-runner.cjs#L594022-L594024) | `method` | não | `turnCtx, connection` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:594022-594024](../../../../../../reference/runtime/sand-eval-runner.cjs#L594022-L594024) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:594022

Chamadas escritas diretamente neste corpo: `.probe`, `this.computerUse.getOrCreateNavigationProbe`, `turnCtx.withDetached`.

SHA-256 do trecho: `1db6f1a1ccfecb3f7f881911eeb933bd718c84377060879c94a8a8eef362f40e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
