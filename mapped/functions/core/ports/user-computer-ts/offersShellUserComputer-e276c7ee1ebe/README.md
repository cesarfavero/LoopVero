# `offersShellUserComputer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/ports/user-computer.ts` · [README do módulo](../../../../../modules/core/ports/user-computer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742461-742463](../../../../../../reference/runtime/host-main.cjs#L742461-L742463) | `FunctionDeclaration` | não | `host` |
| [evaluation:479437-479439](../../../../../../reference/runtime/sand-eval-runner.cjs#L479437-L479439) | `FunctionDeclaration` | não | `host` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742461-742463](../../../../../../reference/runtime/host-main.cjs#L742461-L742463) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479437-479439](../../../../../../reference/runtime/sand-eval-runner.cjs#L479437-L479439) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742461

Chamadas escritas diretamente neste corpo: `host.hasShellUserComputer`, `host.hasUserComputer`.

SHA-256 do trecho: `0b9d15c3e095a8bd41e20478758c7ce088325289ff3ee6d9fe616521d111c3f3`.

### evaluation:479437

Chamadas escritas diretamente neste corpo: `host.hasShellUserComputer`, `host.hasUserComputer`.

SHA-256 do trecho: `0b9d15c3e095a8bd41e20478758c7ce088325289ff3ee6d9fe616521d111c3f3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
