# `crossFieldProblem`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/meetings/meeting-repeat.ts` · [README do módulo](../../../../../modules/shared/meetings/meeting-repeat-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763224-763252](../../../../../../reference/runtime/host-main.cjs#L763224-L763252) | `FunctionDeclaration` | não | `repeat` |
| [evaluation:556189-556217](../../../../../../reference/runtime/sand-eval-runner.cjs#L556189-L556217) | `FunctionDeclaration` | não | `repeat` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763224-763252](../../../../../../reference/runtime/host-main.cjs#L763224-L763252) | 14 | 0 | 0 | 10 | 0 | 0 |
| [evaluation:556189-556217](../../../../../../reference/runtime/sand-eval-runner.cjs#L556189-L556217) | 14 | 0 | 0 | 10 | 0 | 0 |

### host:763224

Chamadas escritas diretamente neste corpo: `daysInMonth`, `new Set`.

SHA-256 do trecho: `47f30ae3b7ceab87d6ebf076cd19804605e752d5c5472e53578789f4bf02eb4a`.

### evaluation:556189

Chamadas escritas diretamente neste corpo: `daysInMonth`, `new Set`.

SHA-256 do trecho: `47f30ae3b7ceab87d6ebf076cd19804605e752d5c5472e53578789f4bf02eb4a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
