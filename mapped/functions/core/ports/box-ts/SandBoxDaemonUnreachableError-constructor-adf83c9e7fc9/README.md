# `SandBoxDaemonUnreachableError.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/ports/box.ts` · [README do módulo](../../../../../modules/core/ports/box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:489498-489503](../../../../../../reference/runtime/host-main.cjs#L489498-L489503) | `method` | não | `outcome, message, options2` |
| [evaluation:475682-475687](../../../../../../reference/runtime/sand-eval-runner.cjs#L475682-L475687) | `method` | não | `outcome, message, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489498-489503](../../../../../../reference/runtime/host-main.cjs#L489498-L489503) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:475682-475687](../../../../../../reference/runtime/sand-eval-runner.cjs#L475682-L475687) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:489498

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.detail`, `this.name`, `this.outcome`.

SHA-256 do trecho: `d7c7ac28f1bd0e71a6a22db93eac384613ff809c4ad64c35418bbee60b361f34`.

### evaluation:475682

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.detail`, `this.name`, `this.outcome`.

SHA-256 do trecho: `d7c7ac28f1bd0e71a6a22db93eac384613ff809c4ad64c35418bbee60b361f34`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
